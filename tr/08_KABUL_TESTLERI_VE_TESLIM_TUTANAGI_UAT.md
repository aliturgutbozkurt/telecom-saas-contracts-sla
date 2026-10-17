# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Kabul Testleri ve Teslim Tutanağı Belgesi (UAT)
**Doküman Kodu:** `TR-TELCO-UAT-2026-08`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-7  
**Sürüm:** `v1.0.0-QUALITY`  
**Tarih:** 18 Ekim 2026  

---

### 1. Kabul Testi Metodolojisi ve Aşamaları

TelcoPulse platformunun canlı telekomünikasyon şebekesine bağlanabilmesi ve ticari faturaya hak kazanabilmesi için aşağıdaki 4 (dört) aşamalı Kullanıcı Kabul Testi (UAT) sürecini başarıyla tamamlaması şarttır:

1. **Aşama 1: Fonksiyonel ve İş Akışı Testleri (FAT):**
   * GSMA SGP.22 uyumlu eSIM profil indirme ve aktivasyon adımları.
   * 3GPP standartlarında 5G veri oturumu açılışı, bakiye tükenmesinde hız kısıtlama (QoS downgrade).
   * MNP (Numara Taşıma) takas entegrasyonu ve paket yenileme mantığı.
2. **Aşama 2: Yüksek Hacimli Yük ve Stres Testi (Load & Stress Test):**
   * 4 saat boyunca kesintisiz **30.000 TPS** sentetik çağrı ve bakiye sorgusu trafiği.
   * Kriter: p99 gecikme < 45ms, HTTP 5xx hata oranı < %0.001, sıfır bellek sızıntısı (memory leak).
3. **Aşama 3: Felaket Kurtarma ve Kaos Testi (Chaos & DR Failover):**
   * Kartal Veri Merkezi ana hatlarının habersiz simülasyonla kesilmesi (Split-Brain / DC Failure).
   * Kriter: Trafiğin en geç 90 saniye içinde kayıpsız (RPO=0) olarak Ankara Veri Merkezine devrolması.
4. **Aşama 4: Siber Güvenlik ve Sızma Testi (Pentest):**
   * Bağımsız TSE ve BTK onaylı siber güvenlik firması tarafından gerçekleştirilen gri-kutu (grey-box) pentest.
   * Kriter: Sıfır kritik veya yüksek seviyeli bulgu.

---

### 2. Hata Sınıflandırması ve Kabul Barajı

Kabul testleri süresince tespit edilen bulgular aşağıdaki baraj kriterine göre değerlendirilir:

| Hata Sınıfı | Tanım | Kabul İçin İzin Verilen Sayı |
| :--- | :--- | :--- |
| **Kritik (P1)** | Sistemin çökmesi, veri bozulması, arama/eSIM akışının durması | **0 (SIFIR)** |
| **Büyük (P2)** | Önemli bir fonksiyonun çalışmaması, geçici çözüm (workaround) bulunmaması | **0 (SIFIR)** |
| **Orta (P3)** | Fonksiyonel hata ancak kabul edilebilir bir geçici operasyonel çözümün bulunması | **Azami 3 (Çözüm takvimine bağlı)** |
| **Düşük (P4)** | Arayüz hizalamaları, metin imla hataları, kozmetik kusurlar | **Azami 10** |

---

### 3. Kabul Tutanağı Şablonu

```markdown
# TELCOPULSE OMNI-BSS SİSTEMİ
## NİHAİ KULLANICI KABUL TUTANAĞI (UAT SIGNOFF)

- **Proje:** TelcoPulse Omni-BSS & eSIM Cloud Suite
- **Sözleşme Kodu:** TR-TELCO-MSA-2026-01
- **Test Başlangıç / Bitiş Tarihi:** 01.12.2026 - 15.12.2026
- **Test Edilen Sürüm:** v1.0.0-RELEASE (Git Commit: #9a7fbc2)

### TEST SONUÇLARI ÖZETİ:
- Fonksiyonel Test Senaryoları: 482 Adet (482 Başarılı, 0 Başarısız)
- 30.000 TPS Yük Testi: Başarılı (Ortalama p99 Gecikme: 34.2 ms)
- DR Failover Testi: Başarılı (Ankara DC Devralma Süresi: 48 saniye)
- Siber Güvenlik Penetrasyon Testi: "Temiz / Sertifikalandırıldı"

### KABUL KARARI:
[X] **ŞARTSIZ NİHAİ KABUL:** Sistem sözleşme ve teknik şartname şartlarına tam uyumludur. Ticari canlı kullanıma ve faturalandırmaya uygundur.
[ ] **KOŞULLU KABUL:** Ekli listede yer alan 2 adet P3 bulgusunun 15 gün içinde giderilmesi şartıyla canlıya geçiş onaylanmıştır.
[ ] **RET:** Sistem baraj kriterlerini sağlayamamıştır.

OPERATÖR KABUL HEYETİ                     YAZILIM SAĞLAYICI TEMSİLCİSİ
Ad Soyad: Selçuk ERDEM                     Ad Soyad: Barış TÜRKOĞLU
Unvan: Çekirdek Ağ Direktörü               Unvan: Çözüm Mimarı
İmza: _____________________                İmza: _____________________
Tarih: 15 Aralık 2026                      Tarih: 15 Aralık 2026
```
