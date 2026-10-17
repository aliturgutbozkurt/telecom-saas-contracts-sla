# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Değişiklik ve Sürüm Yönetimi Prosedürü (RFC / CR)
**Doküman Kodu:** `TR-TELCO-CHG-2026-10`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-9  
**Sürüm:** `v1.1.0-ITIL`  
**Tarih:** 18 Ekim 2026  

---

### 1. Amaç ve Kapsam

Telekomünikasyon şebekesinde kontrolsüz yapılan tek bir konfigürasyon veya kod değişikliği milyonlarca abonenin iletişimini kesebilir. Bu prosedür; ITIL v4 ve telekom eTOM standartlarına uygun olarak TelcoPulse sisteminde gerçekleştirilecek tüm planlı değişikliklerin, sürüm güncellemelerinin ve acil yamaların (hotfix) onay ve canlıya geçiş mekanizmasını düzenler.

---

### 2. Telekom Değişiklik Dondurma Dönemleri (Change Freeze)

Telekom sektöründe şebeke trafiğinin en yoğun olduğu veya ulusal haberleşmenin en kritik olduğu dönemlerde **Değişiklik Dondurma (Change Freeze)** ilan edilir:

```
+-----------------------------------------------------------------------------------+
|                            CHANGE FREEZE TAKVİMİ                                  |
| 1. Yılbaşı Dönemi: 20 Aralık - 05 Ocak (Kesintisiz 16 gün)                        |
| 2. Dini Bayramlar: Ramazan ve Kurban Bayramı arefesi ve bayram günleri            |
| 3. E-Ticaret Zirveleri: Black Friday / Siber Hafta (Kasım ayı son 10 günü)        |
| 4. Ulusal Etkinlikler: Genel ve Yerel Seçim haftaları, Ulusal Sınav günleri      |
+-----------------------------------------------------------------------------------+
```

**Freeze Kuralları:**
* Change Freeze süresince canlı ortama (Production) kesinlikle yeni özellik, refactoring veya planlı bakım sürümü atılamaz.
* İstisna: Yalnızca şebekeyi çökmekten kurtaracak P1 seviyesindeki acil güvenlik/stabilite yamaları her iki şirketin Genel Müdür Yardımcılarının (CTO) ortak yazılı onayı ile canlıya alınabilir.

---

### 3. Değişiklik Sınıfları ve Onay Mekanizması

| Sınıf | Örnek | Onay Mercii | Bildirim Süresi | Dağıtım Penceresi |
| :--- | :--- | :--- | :--- | :--- |
| **Standart Değişiklik** | Rutin sertifika yenileme, pod kaynak artırımı | CAB Otomatik Onay | 3 İş Günü Önce | Pazar 02:00 - 05:00 |
| **Normal Değişiklik** | Yeni mikroservis sürümü, yeni tarife kuralı, DB şema değişikliği | Ortak Değişiklik Kurulu (CAB) | 10 İş Günü Önce | Pazar 02:00 - 05:00 (Canary Dağıtım) |
| **Acil Değişiklik (Emergency Patch)** | P1 arıza hotfix'i, aktif siber saldırı engelleme yaması | Acil Durum CAB (eCAB - CTO Seviyesi) | Derhal (Sözlü/Yazılı) | Anlık (Risk analizi ile) |

---

### 4. Zorunlu Dağıtım Prensipleri (Deployment Rules)

1. **Kanarya Dağıtımı (Canary Deployment):** Yeni sürümler hiçbir zaman aynı anda %100 trafiğe açılmaz. Önce %1 aboneye, 1 saatlik metrik gözleminden sonra %10'a, sorun görülmezse 24 saat içinde kademeli olarak %100'e dağıtılır.
2. **Otomatik Geri Alma (Automated Rollback):** Dağıtım anında HTTP 5xx hata oranı %0.05'in üzerine çıkarsa veya p99 gecikme süresi 60ms'yi aşarsa sistem insan müdahalesi beklemeksizin **otomatik olarak son stabil sürüme (Rollback)** geri döner.
3. **Sıfır Kesinti (Zero Downtime):** Tüm sürüm geçişleri Kubernetes Rolling Update prensibiyle abonelerin oturumlarını koparmadan gerçekleştirilir.

---

### 5. Kapsam Dışı Değişiklikler ve Adam-Gün Efor Hesabı (Change Request - CR)

Sözleşme ve SOW kapsamı dışında kalan yeni talep ve entegrasyonlar için:
* YAZILIM SAĞLAYICI talep edilen özellik için bir **Etki ve Efor Analiz Raporu** hazırlar.
* Mühendislik eforu onaylı kurumsal adam-gün tarifesi üzerinden hesaplanır (Kıdemli Telekom Yazılım Mühendisi: **850 USD / Adam-Gün**).
* OPERATÖR bütçe onayından sonra CR iş planına dahil edilir.
