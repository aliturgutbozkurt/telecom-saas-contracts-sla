# Bölüm 03: SLA, SLO, SLI Farkları ve Hata Bütçesi
> *"SLA ihlali yaptık, ceza kesilecek!"* cümlesini duymak bir yazılım ekibinin başına gelebilecek en stresli şeydir. Peki ama nedir bu SLI, SLO ve SLA?

---

### 1. Üçlüyü Ayırt Etmek: Hız Göstergesi, Hız Limiti ve Trafik Cezası

Gelin bunu günlük hayattan bir radar analojisiyle anlayalım:

1. **SLI (Service Level Indicator - Gerçekte Ölçülen Durum):**
   * *Analoji:* Arabanın hız göstergesi. Şu an ibre 118 km/s gösteriyor.
   * *Teknik:* Prometheus / Grafana'da ölçtüğün gerçek metrik: *"Son 30 günde API isteklerinin %99.97'si başarılı döndü."*

2. **SLO (Service Level Objective - Dahili Hedefimiz):**
   * *Analoji:* Senin kendi kendine koyduğun kural: *"Ben kurallara uyan bir sürücüyüm, 120 km/s'yi geçmeyeceğim."*
   * *Teknik:* SRE ve yazılım ekibinin hedefi: *"Hedefimiz %99.99 kullanılabilirlik ve p99 < 45ms gecikme."*

3. **SLA (Service Level Agreement - Hukuki Taahhüt ve Ceza):**
   * *Analoji:* Yol kenarındaki polis radarı: *"Eğer 130 km/s'yi geçersen 2.000 TL ceza kesilir ve ehliyetine el konulur."*
   * *Teknik:* Müşteriyle imzalanan sözleşme: *"Eğer aylık kullanılabilirlik %99.90'ın altına düşerse, operatöre faturanın %25'i kadar Hizmet Kredisi (indirim) ödenir."*

---

### 2. "Dokuzlar Kuralı" (The Nines): Bir Dakikanın Milyonluk Hesabı

Bir ayda toplam **43.200 dakika** vardır. Yüzdeler küçük görünür ama mühendislikte devasa fark yaratır:

| Kullanılabilirlik Oranı | İsim | Aylık İzin Verilen Toplam Kesinti | Telekomdaki Karşılığı |
| :--- | :--- | :--- | :--- |
| **%99.0** | İki Dokuz | **7 Saat 12 Dakika** | Acemi hobi projesi, kabul edilemez! |
| **%99.9** | Üç Dokuz | **43.8 Dakika** | Normal e-ticaret siteleri |
| **%99.99** | **Dört Dokuz (Four Nines)** | **4 Dakika 23 Saniye** | **TelcoPulse BSS & Portal Standardı** |
| **%99.999** | **Beş Dokuz (Five Nines)** | **26 Saniye** | **5G Çekirdek Şarj & Acil Çağrı Şebekesi** |

> **Junior Yazılımcıya İpucu:** Eğer sistemin aylık taahhüdü %99.999 ise, sunucuyu yeniden başlatmak (restart etmek) için 30 saniye harcarsan, o ayki tüm kesinti hakkını tek seferde tüketmiş olursun! Bu yüzden telekomda **Zero-Downtime Rolling Update** şarttır!

---

### 3. Hata Bütçesi (Error Budget) Nedir ve Nasıl Tüketilir?

Google SRE prensiplerine göre hiçbir sistem %100 kusursuz olamaz.
* %99.99 uptime taahhüdün varsa, **%0.01'lik bir hata yapma hakkın (Hata Bütçen)** vardır. Bu da ayda yaklaşık 4.38 dakikadır.
* Bu bütçe senin **"canlıya yeni kod gönderme ve risk alma sermayendir."**

```
+-------------------------------------------------------------------------+
|                  HATA BÜTÇESİ TRAFİK IŞIKLARI                           |
|                                                                         |
|  [ YEŞİL: Kalan Bütçe > %50 ]   --> Hızlıca yeni özellik deploy et!     |
|  [ SARI : Kalan Bütçe %25-%50 ] --> Dikkatli ol, testleri sıkılaştır!   |
|  [ KIRMIZI: Kalan Bütçe < %25 ] --> FEATURE FREEZE! Yeni kod atmak      |
|                                     yasak! Sadece stabilite ve bugfix!  |
+-------------------------------------------------------------------------+
```

Eğer dikkatsizce yazdığın bir SQL sorgusu prod veritabanını kilitler ve sistem 5 dakika çökerse:
1. O ayın hata bütçesi tamamen tükenir.
2. Ürün yöneticisinin haftalardır beklediği yeni özellikler askıya alınır.
3. Bütün sprint boyunca ekibin tek görevi senin patlattığın sistemi onarmak olur.
