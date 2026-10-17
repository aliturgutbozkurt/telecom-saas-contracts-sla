# Bölüm 04: Telekom ve Yüksek Trafik: TPS ve Latency Cezaları
> *"Lokalimde 5 kullanıcıyla test ettim, gayet hızlı çalışıyordu!"* cümlesi telekomünikasyon dünyasında duyabileceğiniz en ölümcül cümledir.

---

### 1. 25.000 TPS Ne Anlama Gelir?

* **TPS (Transactions Per Second):** Sisteminizin bir saniyede eksiksiz tamamladığı işlem sayısıdır.
* Bir insan gözünü kırpana kadar geçen süre yaklaşık **300 milisaniyedir**.
* TelcoPulse'ın taahhüt ettiği 25.000 TPS demek; **sen gözünü bir kez kırptığında sistemin 7.500 abonenin kota sorgusunu, bakiye düşümünü veya eSIM indirme isteğini başarıyla tamamlamış olması** demektir!

---

### 2. Neden Ortalama (Average) Gecikme Bir Yalandır? (p95 ve p99 Gerçeği)

Acemi yazılımcılar genellikle şunu söyler: *"API'mizin ortalama yanıt süresi 15 milisaniye, çok başarılıyız!"*

Telekom SLA'leri ortalamaya **asla bakmaz**. Çünkü ortalama felaketi gizler:
* 99 isteğin 5ms sürdüğü, ama 1 isteğin 10 saniye sürdüğü bir senaryoda ortalama ~105ms gibi normal görünebilir.
* Oysa o 10 saniye bekleyen istek, bir bankanın acil SMS doğrulama OTP'sidir veya bir acil durum aramasının şarj kontrolüdür!

```
+-----------------------------------------------------------------------------------+
| PERCENTILE (YÜZDELİK) NEDİR?                                                      |
| p50 (Medyan): İsteklerin en hızlı %50'sinin tamamlanma süresi.                   |
| p95: İsteklerin %95'inin bu sürenin altında kaldığı eşik.                        |
| p99: İsteklerin en yavaş %1'lik kısmının dahi aşmadığı katı tavan (Telco Kriteri)|
+-----------------------------------------------------------------------------------+
```

Sözleşmemizdeki kural: **p99 < 45 ms** olmak zorundadır. Yani gönderilen 10.000 isteğin 9.900'ü 45 milisaniyeden daha kısa sürede yanıtlanmalıdır.

---

### 3. Acemi Yazılımcının Yaptığı 3 Büyük Performans Cinayeti

#### Cinayet 1: Döngü İçinde Veritabanı Sorgusu Atmak (N+1 Query)
```python
# YANLIŞ: 1.000 abonenin kotasını tek tek döngüde çekmek (Latency patlar!)
for subscriber_id in subscriber_ids:
    quota = db.query(f"SELECT * FROM quotas WHERE sub_id = {subscriber_id}") # 1.000 network gidiş-gelişi!

# DOĞRU: Tek sorguda topluca çekmek veya In-Memory Redis'ten okumak (< 2ms)
quotas = redis_cluster.mget(keys_list)
```

#### Cinayet 2: Senkron Dış Çağrılarla Ana Akışı Kilitlemek
Aboneye aktivasyon SMS'i göndermek için SMS Gateway'e HTTP çağrısı yaparken cevabın gelmesini beklemek (blocking IO). SMS Gateway 2 saniye gecikirse senin 25.000 TPS kapasiteli uygulaman anında çöker.
* **Çözüm:** SMS ve loglama gibi işleri derhal arka plana (Kafka / RabbitMQ kuyruğuna) atıp ana akışı hemen serbest bırakmak.

#### Cinayet 3: Bağlantı Havuzunu (Connection Pool) Tüketmek
Veritabanı veya Redis bağlantısını açıp `close()` etmemek veya pool limitini yanlış ayarlamak. Bağlantılar kilitlendiğinde yeni gelen istekler kuyrukta bekler, latency 45ms'den 5.000ms'ye fırlar ve SLA ihlali başlar.
