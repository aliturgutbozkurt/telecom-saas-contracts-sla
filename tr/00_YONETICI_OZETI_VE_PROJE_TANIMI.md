# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Yönetici Özeti ve Kurumsal Proje Tanımı
**Doküman Kodu:** `TR-TELCO-DOC-00`  
**Sürüm:** `v1.0.0-PROD`  
**Gizlilik Derecesi:** HİZMETE ÖZEL / TİCARİ SIR  
**Tarih:** 18 Ekim 2026  

---

### 1. Taraflar ve Kurumsal Roller

Bu sözleşme ve teknik şartname paketi, Türkiye ve küresel regülasyonlara tabi telekomünikasyon altyapısı üzerinde yeni nesil SaaS entegrasyonunu güvence altına almak üzere aşağıdaki taraflar arasında akdedilmiştir:

1. **MÜŞTERİ / OPERATÖR:**  
   **TürkTel Global İletişim ve Mobil Hizmetler A.Ş.**  
   *(Bundan böyle **"TÜRK-TEL"** veya **"OPERATÖR"** olarak anılacaktır.)*  
   * **Profil:** 48 Milyon aktif mobil, 14 Milyon sabit internet ve 6 Milyon kurumsal IoT abonesine sahip, 5G SA/NSA ve ulusal fiber omurgasını işleten, BTK (Bilgi Teknolojileri ve İletişim Kurumu) lisanslı Tier-1 telekom operatörü.  
   * **Temsil:** Genel Müdürlük, Maslak Telekom Plaza, İstanbul / Türkiye.  

2. **YAZILIM SAĞLAYICI / TEDARİKÇİ:**  
   **TelcoCloud Yeni Nesil Ağ ve Yazılım Teknolojileri A.Ş.**  
   *(Bundan böyle **"TELCOCLOUD"** veya **"YAZILIM SAĞLAYICI"** olarak anılacaktır.)*  
   * **Profil:** Telekomünikasyon çekirdek ağları (Core Network), bulut-yerel BSS/OSS (İş ve Operasyon Destek Sistemleri), GSMA uyumlu eSIM Uzaktan Provizyon (RSP) ve gerçek zamanlı ücretlendirme sistemleri (CCS/CHF) geliştiren derin teknoloji SaaS şirketi.  
   * **Temsil:** Ar-Ge Yerleşkesi, ODTÜ Teknokent, Ankara / Türkiye.  

---

### 2. Projenin Konusu ve Vizyonu: "TelcoPulse Omni-BSS Platformu"

Proje; TÜRK-TEL'in mevcut monolitik ve yüksek bakım maliyetli eski nesil (legacy) sistemlerini devre dışı bırakarak; mikroservis mimarisine dayalı, kubernetes tabanlı, saniyede **25.000 TPS** işlem kapasitesine sahip, **%99.999** çekirdek servis erişilebilirliği sunan **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** platformunun devreye alınmasını ve 36 ay boyunca kesintisiz SaaS olarak işletilmesini kapsar.

```
+-----------------------------------------------------------------------------------+
|                        TELCOPULSE PLATFORM MİMARİSİ                               |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Abone & Kanal Katmanı ]                                                        |
|  Mobile App (iOS/Android) | Self-Service Web Portal | Bayi / Kurumsal Portalleri   |
|         │                           │                           │                 |
|         ▼                           ▼                           ▼                 |
|  [ API Gateway & mTLS / OAuth2 Tokenizasyon Katmanı (p99 < 35ms) ]                |
|         │                                                                         |
|  +──────┴──────────────────────────────────────────────────────────────────────+  |
|  |                       TELCOCLOUD MİKROSERVİS KÜMESİ                         |  |
|  |  +------------------+  +--------------------+  +-------------------------+  |  |
|  |  | eSIM RSP Orkestra|  | 5G CHF / OCS Real- |  | Abone & Paket Yaşam     |  |  |
|  |  | GSMA SM-DP+ Enteg|  | Time Rating Engine |  | Döngüsü Yöneticisi       |  |  |
|  |  +------------------+  +--------------------+  +-------------------------+  |  |
|  |  +------------------+  +--------------------+  +-------------------------+  |  |
|  |  | Fraud & SIM-Swap |  | BTK & KVKK Uyumlu  |  | Network Telemetry &     |  |  |
|  |  | Anomali Tespit   |  | Trafik/CDR Log Kasa|  | Kafka Event Streaming   |  |  |
|  |  +------------------+  +--------------------+  +-------------------------+  |  |
|  +─────────────────────────────────────────────────────────────────────────────+  |
|         │                                                                         |
|         ▼                                                                         |
|  [ Operatör Altyapı Entegrasyonları (Direct Connect / IPsec Özel Hatlar) ]        |
|  HLR / HSS / UDM (Abone) | 5G Core AMF/SMF | SMSC / USSD Gateway | Tier-4 DC      |
+-----------------------------------------------------------------------------------+
```

---

### 3. Kritik Mühendislik ve Operasyonel Metrikler

Telekomünikasyon dünyasında standart web uygulamalarından farklı olarak milisaniyeler ve kesintisiz iletişim hayati önem taşır. Sözleşme paketinin bağlayıcı kıldığı temel performans göstergeleri:

| Parametre | Taahhüt Edilen Değer | İhlal Eşiği | Açıklama |
| :--- | :--- | :--- | :--- |
| **Çekirdek Uptime (SLA)** | **%99.999** (Five Nines) | < %99.99 | Ayda maksimum 26 saniye plansız kesinti |
| **Genel Sistem Uptime** | **%99.99** (Four Nines) | < %99.90 | Ayda maksimum 4.38 dakika kesinti |
| **Maksimum İşlem Hacmi** | **25.000 TPS** (Peak) | < 20.000 TPS | Yoğun saatlerde (Busy Hour) garantili kapasite |
| **Uçtan Uca Gecikme (p99)** | **< 45 ms** | > 80 ms | eSIM provizyon & kota sorgulama süresi |
| **RPO (Kurtarma Noktası Hedefi)** | **0 Veri Kaybı** (RPO = 0) | > 0 saniye | Senkron veri çoğaltma (Active-Active DR) |
| **RTO (Kurtarma Süresi Hedefi)** | **< 15 Dakika** | > 30 dakika | Tam felaket durumunda yedek DC'ye geçiş |
| **Veri Egemenliği** | **%100 Yerel Veri Merkezi** | Sınır ötesi aktarım | BTK regülasyonu gereği yurt dışına veri çıkışı yasaktır |

---

### 4. Sözleşme Paketi Fihristi ve Doküman Hiyerarşisi

Herhangi bir çelişki durumunda dokümanların bağlayıcılık hiyerarşisi yukarıdan aşağıya doğrudur:

1. [01_ANA_HIZMET_SOZLESMESI_MSA.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/01_ANA_HIZMET_SOZLESMESI_MSA.md) - Ana çerçeve, cezai şartlar, fesih ve IPR hakları.
2. [03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md) - Servis seviyeleri, ceza kesintileri ve hata bütçesi.
3. [05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md) - 5809 Sayılı Kanun, BTK kuralları ve KVKK taahhütleri.
4. [02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md) - Sistem mimarisi, teslim edilecek modüller ve kabul kriterleri.
5. [04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md) - Lisanslama modeli, özel tenant izolasyonu ve kapasite kotaları.
6. [07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md) - P1-P4 arıza müdahalesi, War Room protokolü ve NOC eskalasyonu.
7. [08_KABUL_TESTLERI_VE_TESLIM_TUTANAGI_UAT.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/08_KABUL_TESTLERI_VE_TESLIM_TUTANAGI_UAT.md) - Kabul testi prosedürü ve imza mekanizması.
8. [09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md) - Tarafsız yediemin (escrow), iflas güvencesi ve denetim.
9. [10_DEGISIKLIK_VE_SURUM_YONETIMI_RFC_CR.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/10_DEGISIKLIK_VE_SURUM_YONETIMI_RFC_CR.md) - Change Freeze, CAB onayları ve acil durum yamalama protokolü.
10. [06_GIZLILIK_VE_SIR_SAKLAMA_SOZLESMESI_NDA.md](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/06_GIZLILIK_VE_SIR_SAKLAMA_SOZLESMESI_NDA.md) - Ağ topolojisi, şifreleme anahtarları ve ticari sır koruması.
