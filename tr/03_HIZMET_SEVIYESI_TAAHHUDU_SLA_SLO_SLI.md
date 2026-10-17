# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Hizmet Seviyesi Taahhüdü Sözleşmesi (SLA / SLO / SLI)
**Doküman Kodu:** `TR-TELCO-SLA-2026-03`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-2  
**Sürüm:** `v1.1.0-ENTERPRISE`  
**Tarih:** 18 Ekim 2026  

---

### 1. Amaç ve Temel Yaklaşım

Telekomünikasyon altyapısında hizmet kesintisi yalnızca müşteri memnuniyetsizliği yaratmakla kalmaz; acil çağrıların (112 Acil), bankacılık SMS doğrulamalarının ve 5G veri oturumlarının durmasına yol açarak ulusal çapta kriz oluşturur. Bu nedenle işbu Hizmet Seviyesi Taahhüdü (SLA), servis seviyesi göstergelerini (SLI), operasyonel hedefleri (SLO) ve bağlayıcı cezai yaptırımları en katı telekom standartlarında düzenler.

---

### 2. SLI, SLO ve SLA Kavramsal Ayrımı

```
+-----------------------------------------------------------------------------------+
| SLI (Ölçülen Gerçeklik)        SLO (Mühendislik Hedefi)      SLA (Hukuki Taahhüt) |
| Prometheus/Grafana Metriği  -> Dahili SRE Güvenilirlik Çıtası -> İhlalde Para Cezası|
| "Son 30 günde ölçülen Uptime"  "Hedef: %99.999 Uptime"       "<%99.99 ise %20 ceza"|
+-----------------------------------------------------------------------------------+
```

* **SLI (Service Level Indicator):** Gerçek zamanlı ölçülen teknik parametre (Örn: `HTTP 200 başarı oranı`, `p99 latency`).
* **SLO (Service Level Objective):** Mühendislik ve SRE ekibinin tutturmayı hedeflediği dahili mükemmeliyet eşiği.
* **SLA (Service Level Agreement):** İhlali durumunda finansal cezalar (hizmet kredisi) veya sözleşme feshi doğuran yasal taahhüt.

---

### 3. Servis Seviyesi Göstergeleri (SLI) ve Formüller

#### 3.1. Kullanılabilirlik Göstergesi (Availability SLI)
$$\text{SLI}_{\text{Uptime}} = \left( \frac{\text{Toplam Dakika} - \text{Plansız Kesinti Dakikası}}{\text{Toplam Dakika}} \right) \times 100$$
*(Not: Planlı bakım pencereleri ve OPERATÖR kaynaklı şebeke kesintileri hesaba dahil edilmez.)*

#### 3.2. Gecikme Göstergesi (Latency SLI)
$$\text{SLI}_{\text{Latency}} = \left( \frac{\text{Yanıt Süresi} \le 45\text{ms Olan İstek Sayısı}}{\text{Toplam Başarılı İstek Sayısı}} \right) \times 100$$

#### 3.3. Hata Oranı Göstergesi (Error Rate SLI)
$$\text{SLI}_{\text{Error}} = \left( \frac{\text{Sistem Kaynaklı HTTP 5xx veya Diameter Hata Sayısı}}{\text{Toplam Gönderilen İstek Sayısı}} \right) \times 100$$

---

### 4. Servis Seviyesi Hedefleri (SLO) ve İzin Verilen Kesinti Süreleri

| Servis Katmanı | SLO Hedefi | Aylık İzin Verilen Maksimum Kesinti | Yıllık İzin Verilen Kesinti |
| :--- | :--- | :--- | :--- |
| **Çekirdek Şarj & eSIM (Core Engine)** | **%99.999** (Five Nines) | **26 Saniye** | **5.26 Dakika** |
| **BSS Abone & Tarife Yönetimi** | **%99.99** (Four Nines) | **4.38 Dakika** | **52.60 Dakika** |
| **Müşteri Self-Service & Mobil API** | **%99.95** (Three and Half) | **21.60 Dakika** | **4.38 Saat** |
| **Raporlama & Arşiv (ClickHouse)** | **%99.50** | **3.65 Saat** | **43.80 Saat** |

---

### 5. Arıza Sınıfları, Müdahale ve Çözüm Süreleri (MTTA / MTTR)

Tüm arızalar OPERATÖR NOC (Network Operations Center) ve TELCOCLOUD SRE ekipleri tarafından ortak izleme ekranlarında aşağıdaki önceliklere göre sınıflandırılır:

| Öncelik | Tanım ve Etki Kapsamı | İlk Yanıt (MTTA) | Kalıcı Çözüm / İş Güvencesi (MTTR) | Çalışma Rejimi |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Blocker (Kritik Kesinti)** | Çekirdek ücretlendirme (CHF) durdu, eSIM indirilemiyor, abonelerin %5'inden fazlası etkilendi. | **Azami 5 Dakika** | **Azami 60 Dakika** | 7/24 Kesintisiz War Room |
| **P2 - Critical (Büyük Arıza)** | Redundancy kayboldu (tek cluster düştü), p99 latency > 100ms oldu, belirli bir ilde veya pakette provizyon tıkandı. | **Azami 15 Dakika** | **Azami 4 Saat** | 7/24 Kesintisiz |
| **P3 - Major (Orta Seviye)** | Raporlama gecikmeli çalışıyor, bayi arayüzünde münferit hatalar var, alternatif akışlar çalışıyor. | **Azami 60 Dakika** | **Azami 24 Saat** | Mesai saatleri (08:00-20:00) |
| **P4 - Minor (Düşük)** | Kozmetik UI hataları, metin yanlışlıkları, düşük öncelikli doküman eksiklikleri. | **Azami 4 Saat** | **Azami 5 İş Günü** | Standart iş günleri |

---

### 6. Hata Bütçesi (Error Budget) ve Tüketim Politikası

Modern SRE yaklaşımı uyarınca, %99.99 uptime taahhüdü aylık **%0.01'lik bir Hata Bütçesi** (yaklaşık 4.38 dakika) sunar.

1. **Yeşil Bölge (Kalan Bütçe > %50):** Yeni özellik geliştirmeleri, mimari refactoring ve normal sürüm dağıtımları planlandığı gibi devam eder.
2. **Sarı Bölge (%25 - %50 Kalan):** Yalnızca düşük riskli ve önceden onaylanmış sürümler yayınlanabilir. Öncelik test otomasyonuna verilir.
3. **Kırmızı Bölge (Kalan Bütçe < %25 veya Tükendi):**
   * **Feature Freeze:** Sistem kararlılığı yeniden tesis edilene ve yeni takvim ayına girilene kadar tüm yeni özellik dağıtımları derhal durdurulur.
   * Geliştirme ekibinin mesaisinin %100'ü güvenilirlik, kök neden analizi (RCA), performans iyileştirme ve teknik borçların temizlenmesine tahsis edilir.

---

### 7. Hizmet Kredisi (Service Credit) ve Ceza Kesinti Matrisi

Taahhüt edilen aylık çekirdek servis kullanılabilirlik oranının altına düşülmesi halinde, YAZILIM SAĞLAYICI kusurlu kabul edilir ve OPERATÖR'e takip eden ayın SaaS faturasından düşülmek üzere aşağıdaki oranlarda **Hizmet Kredisi** tahakkuk eder:

| Aylık Gerçekleşen Uptime | Hizmet Kredisi (Aylık SaaS Bedeli İndirim Oranı) | Mali Karşılık (Aylık 185.000 USD Üzerinden) |
| :--- | :--- | :--- |
| **%99.99 ve üzeri** | **%0 (Ceza Yok)** | 0 USD |
| **%99.95 - %99.989** | **%10** | 18.500 USD |
| **%99.90 - %99.949** | **%25** | 46.250 USD |
| **%99.50 - %99.899** | **%50** | 92.500 USD |
| **< %99.50** | **%100 (O ay için fatura ödenmez) + Fesih Hakkı** | 185.000 USD + Haklı Nedenle Fesih |

*Ek Olarak:* P1 arızasında MTTR süresinin (60 dakika) aşıldığı her ilave 30 dakika için aylık fatura bedelinin **%5'i oranında ek cezai şart** uygulanır (Maksimum aylık fatura tutarının %100'ü ile sınırlıdır).

---

### 8. İstisnalar ve Muafiyet Halleri (Exclusions)

Aşağıdaki haller SLA kesinti süresi hesabına dahil edilmez:
1. Önceden yazılı bildirilmiş ve onaylanmış planlı bakım pencereleri (Pazar günleri 02:00 - 05:00 saatleri arası).
2. OPERATÖR'ün kendi çekirdek transmisyon şebekesinde meydana gelen ulusal fiber hat kopmaları.
3. OPERATÖR yetkili personelinin sisteme usulsüz müdahalesi veya onaylanmamış donanım değişiklikleri.
4. Yasal olarak belgelenmiş mücbir sebepler (Doğal afetler, savaş, olağanüstü hal).
