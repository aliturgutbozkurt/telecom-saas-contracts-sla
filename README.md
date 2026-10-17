# 📡 TelcoPulse Omni-BSS & eSIM Cloud Suite
### Kurumsal Telekomünikasyon SLA, Sözleşme ve Junior Mühendis Başucu Rehberi
*Enterprise Telecom SaaS Contracts, SLA/SLO Framework, Regulatory Compliance & Junior Software Engineer Guide*

---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![SLA](https://img.shields.io/badge/Core_Uptime-99.999%25-00f2fe.svg)](tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md)
[![Throughput](https://img.shields.io/badge/Capacity-25%2C000_TPS-4facfe.svg)](tr/02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md)
[![Regulatory](https://img.shields.io/badge/Compliance-BTK_%7C_KVKK_%7C_5809-10b981.svg)](tr/05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md)
[![Language](https://img.shields.io/badge/Languages-Türkçe_%7C_English-8b5cf6.svg)](#dizin-haritası--repository-structure)

---

## 🌟 Proje Özeti (Executive Overview)

Bu depo; Tier-1 bir telekomünikasyon operatörü (**TürkTel Global İletişim A.Ş. / 48 Milyon Abone**) ile derin teknoloji bir yazılım şirketi (**TelcoCloud A.Ş.**) arasında imzalanan **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** projesinin uçtan uca tüm yasal sözleşmelerini, teknik şartnamelerini, SLA/SLO cezai matrislerini ve bir yazılım mühendisinin (özellikle kariyerinin başındaki junior bir mühendisin) bilmesi gereken tüm kurumsal dinamikleri içeren eksiksiz bir rehberdir.

### 🏢 Örnek Proje Tarafları:
1. **OPERATÖR (MÜŞTERİ):**
   * **TR:** **TürkTel Global İletişim ve Mobil Hizmetler A.Ş.** (48M Mobil, 14M Fiber abonesi olan, 5G SA/NSA işletmecisi, BTK lisanslı Tier-1 telekom operatörü).
   * **EN:** **NexusTel Global Telecommunications Corp.**
2. **YAZILIM SAĞLAYICI (TEDARİKÇİ):**
   * **TR:** **TelcoCloud Yeni Nesil Ağ ve Yazılım Teknolojileri A.Ş.** (Bulut-yerel BSS/OSS, 5G CHF/OCS gerçek zamanlı ücretlendirme ve GSMA eSIM RSP çözümleri geliştiren derin teknoloji şirketi).
   * **EN:** **TelcoCloud Enterprise Network & Software Technologies Inc.**

---

## 🏗️ Telekomünikasyon Sistem Mimarisi

```
+---------------------------------------------------------------------------------------------------+
|                        TELCOPULSE OMNI-BSS BULUT-YEREL MİMARİSİ                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ KANAL & ERİŞİM ] ---> [ API GATEWAY (Kong/Envoy) - Rate Limiting & Auth Tokenization ]         |
|                                     │                                                             |
|           ┌─────────────────────────┼─────────────────────────┐                                   |
|           ▼                         ▼                         ▼                                   |
|  [ MODÜL 1: eSIM RSP ]     [ MODÜL 2: 5G CHF/OCS ]   [ MODÜL 3: ABONE & PAKET ]                   |
|  - GSMA SGP.22 / SGP.32    - 3GPP Rel-16/17 Standart - Tarife ve Kampanya Motoru                  |
|  - SM-DP+ / SM-DS Enteg.   - Diameter Ro/Gy Enteg.   - Paket Aşım Kontrolü                        |
|  - eSIM QR & Push İndir    - HTTP/2 Nchf Servisleri  - Fatura Dönemi ve Bakiye                    |
|           │                         │                         │                                   |
|           └─────────────────────────┼─────────────────────────┘                                   |
|                                     ▼                                                             |
|                    [ KAFKA EVENT STREAMING (Yüksek Hacimli Bus) ]                                 |
|                                     │                                                             |
|           ┌─────────────────────────┴─────────────────────────┐                                   |
|           ▼                                                   ▼                                   |
|  [ MODÜL 4: FRAUD & ANOMALİ ]                [ MODÜL 5: BTK/KVKK LOG KASASI ]                     |
|  - SIM-Swap & Anlık Port-Out Kontrolü        - 5809 Sayılı Kanun Uyumlu CDR Loglama               |
|  - Uluslararası Arama (IRSF) Tespiti         - SHA-256 Zaman Damgalı WORM Depolama                |
|  - Anomali Alarm Motoru (< 2 saniye)         - Yurt Dışına Çıkış İzolasyon Denetimi               |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 📊 Kritik Telekom Mühendislik Metrikleri

| Metrik | Taahhüt Değeri | Açıklama |
| :--- | :--- | :--- |
| **Çekirdek Uptime (SLA)** | **%99.999** (Five Nines) | Ayda maksimum 26 saniye plansız kesinti hakkı |
| **Genel Sistem Uptime** | **%99.99** (Four Nines) | Ayda maksimum 4.38 dakika kesinti hakkı |
| **İşlem Hacmi (Throughput)** | **25.000 TPS** (Peak) | Saniyede 25.000 bakiye kontrolü / eSIM isteği |
| **Uçtan Uca Gecikme (p99)** | **< 45 ms** | En yavaş %1'lik istek dahi 45ms'yi geçemez |
| **Felaket Kurtarma (DR)** | **RPO = 0 / RTO < 15 dk**| Veri kaybı sıfır; İstanbul-Ankara Active-Active |
| **Veri Egemenliği** | **%100 Yerel Veri Merkezi**| Hiçbir telekom verisi yurt dışına çıkamaz |

---

## 📁 Dizin Haritası / Repository Structure

```
telecom/
├── README.md                              # Bu ana rehber belgesi
├── LICENSE                                # MIT Lisansı
├── index.html                             # Web dashboard yönlendirme
├── web/                                   # Modern interaktif web portalı
│   ├── index.html                         # İnteraktif Sözleşme ve SLA Dashboard
│   ├── styles.css                         # Sleek neon-cyan dark UI
│   └── app.js                             # SLA simülatörü, sözleşme okuyucu, mühendis sınavı
├── tr/                                    # TÜRKÇE KURUMSAL SÖZLEŞMELER
│   ├── 00_YONETICI_OZETI_VE_PROJE_TANIMI.md
│   ├── 01_ANA_HIZMET_SOZLESMESI_MSA.md
│   ├── 02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md
│   ├── 03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md
│   ├── 04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md
│   ├── 05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md
│   ├── 06_GIZLILIK_VE_SIR_SAKLAMA_SOZLESMESI_NDA.md
│   ├── 07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md
│   ├── 08_KABUL_TESTLERI_VE_TESLIM_TUTANAGI_UAT.md
│   ├── 09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md
│   └── 10_DEGISIKLIK_VE_SURUM_YONETIMI_RFC_CR.md
├── en/                                    # ENGLISH ENTERPRISE CONTRACTS
│   ├── 00_EXECUTIVE_SUMMARY_AND_PROJECT_OVERVIEW.md
│   ├── 01_MASTER_SERVICES_AGREEMENT_MSA.md
│   ├── 02_STATEMENT_OF_WORK_AND_TECHNICAL_SPECIFICATIONS_SOW.md
│   ├── 03_SERVICE_LEVEL_AGREEMENT_SLA_SLO_SLI.md
│   ├── 04_SAAS_SUBSCRIPTION_AND_LICENSE_AGREEMENT.md
│   ├── 05_DATA_PROCESSING_AGREEMENT_DPA_REGULATORY_COMPLIANCE.md
│   ├── 06_NON_DISCLOSURE_AGREEMENT_NDA.md
│   ├── 07_INCIDENT_MANAGEMENT_AND_ESCALATION_MATRIX.md
│   ├── 08_ACCEPTANCE_TESTING_AND_SIGNOFF_UAT.md
│   ├── 09_SOURCE_CODE_ESCROW_AND_BUSINESS_CONTINUITY.md
│   └── 10_CHANGE_MANAGEMENT_AND_RELEASE_PROCEDURE.md
└── muhendis-rehberi/                      # ACEMİ YAZILIM MÜHENDİSİ BAŞUCU REHBERİ
    ├── README.md                          # Zihniyet Değişimi ve Giriş
    ├── 00_GIRIS_VE_SOZLESMELER_NEDEN_VAR.md  # Kod yazmak neden yetmez?
    ├── 01_MSA_NEDIR_YAZILIMCIYI_NASIL_BAGLAR.md # Fikri mülkiyet ve sorumluluk tavanı
    ├── 02_SOW_VE_SARTNAME_KOD_YAZARKEN_NASIL_KULLANILIR.md # Scope Creep tuzağı
    ├── 03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md # %99.99 Uptime ve Error Budget
    ├── 04_TELEKOM_VE_YUKSEK_TRAFIK_TPS_LATENCY_CEZALARI.md # 25k TPS ve p99 < 45ms cezaları
    ├── 05_BTK_KVKK_VE_LOGLARDA_YAPILAN_BUYUK_HATALAR.md # console.log'a IMSI/MSISDN basmak
    ├── 06_NDA_VE_TICARI_SIRLAR_ACEMI_HATALARI.md # GitHub'a token pushlamak, ChatGPT yasakları
    ├── 07_ARIZA_YONETIMI_VE_P1_OLAYINDA_NE_YAPILMALI.md # Gece 03:00'te telefon çalarsa War Room
    ├── 08_KABUL_TESTLERI_UAT_VE_KOSULLU_KABUL.md # Bug vs Feature Request savaşı
    ├── 09_ESCROW_KOD_YEDIEMIN_VE_FELAKET_KURTARMA.md # Kodu TÜBİTAK kasasına kilitlemek
    └── 10_CHANGE_FREEZE_VE_SURUM_YONETIMI.md # Yılbaşı gecesi prod'a kod atılmaz!
```

---

## 📑 Sözleşme Paketi Özeti (Contract Overview)

| No | Türkçe Doküman | English Document | Temel Odak Noktası |
| :---: | :--- | :--- | :--- |
| **00** | [Yönetici Özeti](tr/00_YONETICI_OZETI_VE_PROJE_TANIMI.md) | [Executive Summary](en/00_EXECUTIVE_SUMMARY_AND_PROJECT_OVERVIEW.md) | Proje vizyonu, taraflar, mimari ve metrikler |
| **01** | [Ana Hizmet Sözleşmesi (MSA)](tr/01_ANA_HIZMET_SOZLESMESI_MSA.md) | [Master Services Agreement](en/01_MASTER_SERVICES_AGREEMENT_MSA.md) | Çatı sözleşme, IPR, Liability Cap, ISTAC tahkimi |
| **02** | [Teknik Şartname (SOW)](tr/02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md) | [Statement of Work (SOW)](en/02_STATEMENT_OF_WORK_AND_TECHNICAL_SPECIFICATIONS_SOW.md) | 25k TPS, GSMA RSP, 5G CHF, Kafka, Patroni HA |
| **03** | [Hizmet Seviyesi (SLA)](tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md) | [Service Level Agreement](en/03_SERVICE_LEVEL_AGREEMENT_SLA_SLO_SLI.md) | %99.999 Uptime, MTTA/MTTR, Ceza Mahsubu |
| **04** | [SaaS Lisans Sözleşmesi](tr/04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md) | [SaaS License Agreement](en/04_SAAS_SUBSCRIPTION_AND_LICENSE_AGREEMENT.md) | Özel Tahsisli Bulut, Abone Kademeleri, N-1 |
| **05** | [Veri İşleme (DPA/BTK/KVKK)](tr/05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md) | [Data Processing (DPA)](en/05_DATA_PROCESSING_AGREEMENT_DPA_REGULATORY_COMPLIANCE.md) | 5809 Sayılı K., Veri Egemenliği, mTLS, 72 saat |
| **06** | [Gizlilik Sözleşmesi (NDA)](tr/06_GIZLILIK_VE_SIR_SAKLAMA_SOZLESMESI_NDA.md) | [Non-Disclosure Agreement](en/06_NON_DISCLOSURE_AGREEMENT_NDA.md) | 500k USD cezai şart, şebeke sırrı, AI yasağı |
| **07** | [Olay & Eskalasyon Matrisi](tr/07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md) | [Incident Escalation Matrix](en/07_INCIDENT_MANAGEMENT_AND_ESCALATION_MATRIX.md) | L1-L4 Triage, P1 War Room, 5-Why RCA |
| **08** | [Kullanıcı Kabul Testi (UAT)](tr/08_KABUL_TESTLERI_VE_TESLIM_TUTANAGI_UAT.md) | [Acceptance Testing (UAT)](en/08_ACCEPTANCE_TESTING_AND_SIGNOFF_UAT.md) | 30k TPS Stres Testi, 0 P1/P2 kabul barajı |
| **09** | [Kod Yediemini (Escrow)](tr/09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md) | [Source Code Escrow](en/09_SOURCE_CODE_ESCROW_AND_BUSINESS_CONTINUITY.md) | TÜBİTAK emanet kasası, iflas güvencesi |
| **10** | [Değişiklik & Sürüm (CAB/CR)](tr/10_DEGISIKLIK_VE_SURUM_YONETIMI_RFC_CR.md) | [Change Management (CAB)](en/10_CHANGE_MANAGEMENT_AND_RELEASE_PROCEDURE.md) | Change Freeze, CAB onayları, Otomatik Rollback |

---

## 🎓 Junior Mühendis Başucu Rehberi

Deponun [`muhendis-rehberi/`](muhendis-rehberi/README.md) dizininde yer alan 11 bölümlük kılavuz, özellikle kurumsal telekom ve yüksek trafikli sistemlerde çalışmaya başlayan genç yazılımcılara şunları kazandırır:

1. **"Ben sadece kod yazarım" zihniyetinden kurtulma:** Yazılan kodun hukuki, operasyonel ve finansal etkilerini anlama.
2. **Scope Creep'e karşı kendini ve şirketini savunma:** "2 dakikalık iş" tuzaklarına düşmeden profesyonelce Change Request (CR) mekanizmasını çalıştırma.
3. **Milisaniyelerin ve SLA'lerin matematiğini kavrama:** %99.999 uptime'da bir aylık kesinti hakkının sadece 26 saniye olduğunu idrak etme.
4. **Veri güvenliği ve yasal regülasyonlar:** Neden abonenin telefon numarasını veya IMSI'sini loglara açık metin basamayacağını öğrenme.
5. **P1 Arıza Yönetimi & War Room soğukkanlılığı:** Gece 03:00'te sistem patladığında paniklemeden "Önce kurtar, sonra araştır" ilkesiyle hareket etme.

---

## 💻 Web Uygulaması ve İnteraktif Dashboard

Proje, tüm bu sözleşmeleri ve metrikleri interaktif olarak keşfetmenizi sağlayan modern bir web arayüzü ile birlikte gelir:
* **Çift Dilli Arayüz (TR / EN):** Tek tıkla tüm arayüzü ve sözleşme özetlerini Türkçe veya İngilizce görüntüleme.
* **Canlı SLA & Ceza Hesaplayıcı:** Uptime oranını, P1 kesinti süresini ve abone sayısını kaydırarak kesilecek ceza miktarını ve tüketilen Hata Bütçesini (Error Budget) anında simüle edin.
* **İnteraktif Sözleşme Okuyucu:** 11 dokümanın tamamını modal pencerede hızlıca inceleyin.
* **Acemi Mühendis Sınavı:** 5 gerçek hayat senaryosunu çözerek kurumsal telekom bilginizi test edin.

### 🚀 Yerel Çalıştırma:
Herhangi bir statik web sunucusu ile saniyeler içinde çalıştırabilirsiniz:
```bash
# Python ile
python3 -m http.server 4455

# veya Node.js / npx ile
npx serve .
```
Tarayıcınızda `http://localhost:4455/web/index.html` adresini açmanız yeterlidir.

---

## ⚖️ Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Eğitim, kurumsal şablon ve profesyonel referans amaçlarıyla özgürce kullanılabilir, çatallanabilir (fork) ve genişletilebilir.
