// TelcoPulse Omni-BSS & eSIM Suite - Enterprise Web App Logic

let currentLang = 'tr';

const contractsData = {
  tr: [
    {
      code: "TR-TELCO-DOC-00",
      title: "00. Yönetici Özeti ve Proje Tanımı",
      desc: "Projenin kapsamı, taraflar (TürkTel & TelcoCloud), 25.000 TPS, %99.999 çekirdek uptime ve kurumsal mimari hedefleri.",
      tags: ["Özet", "Mimari", "TPS", "Uptime"],
      path: "../tr/00_YONETICI_OZETI_VE_PROJE_TANIMI.md",
      content: `### 1. Taraflar ve Kurumsal Roller
- **MÜŞTERİ / OPERATÖR:** TürkTel Global İletişim ve Mobil Hizmetler A.Ş. (48 Milyon Aktif Abone, 5G SA/NSA, Ulusal Fiber İşletmecisi)
- **YAZILIM SAĞLAYICI:** TelcoCloud Yeni Nesil Ağ ve Yazılım Teknolojileri A.Ş. (Cloud-Native BSS/OSS, 5G CHF, GSMA eSIM Uzaktan Provizyon)

### 2. Projenin Konusu: "TelcoPulse Omni-BSS Platformu"
Mikroservis mimarisine dayalı, kubernetes tabanlı, saniyede 25.000 TPS işlem kapasiteli, %99.999 çekirdek servis erişilebilirliği sunan yeni nesil BSS platformunun devreye alınması ve 36 ay kesintisiz SaaS işletimi.

### 3. Temel Metrikler:
- Çekirdek Uptime: %99.999 (Ayda maks. 26 saniye plansız kesinti)
- Genel Uptime: %99.99 (Ayda maks. 4.38 dakika kesinti)
- Maksimum Throughput: 25.000 TPS Peak
- Uçtan Uca Gecikme: p99 < 45 ms
- RPO = 0 (Veri Kaybı Yok), RTO < 15 Dakika (Active-Active DR)`
    },
    {
      code: "TR-TELCO-MSA-01",
      title: "01. Ana Hizmet Sözleşmesi (MSA)",
      desc: "Tarafların hak ve borçları, fikri mülkiyet (IPR), sorumluluk tavanı (Liability Cap), fesih ve ISTAC tahkim şartları.",
      tags: ["MSA", "IPR", "Liability Cap", "ISTAC"],
      path: "../tr/01_ANA_HIZMET_SOZLESMESI_MSA.md",
      content: `### Önemli Hukuki Maddeler:
- **Madde 4 - Servis Sürekliliği:** Yıllık %99.999 çekirdek servis ve %99.99 genel sistem kullanılabilirlik taahhüdü.
- **Madde 5 - Fikri Mülkiyet (IPR):** Yazılım kodları münhasıran TelcoCloud'a, telekom trafik ve abone verileri (CDR) münhasıran Operatör'e aittir.
- **Madde 6 - Ticari Şartlar:** 1.250.000 USD kurulum bedeli, 185.000 USD/Ay temel SaaS lisansı (20M aboneye kadar).
- **Madde 7 - Sorumluluk Tavanı (Liability Cap):** Son 12 ayda ödenen bedel ile sınırlıdır; ancak kasıt, ağır kusur, NDA ve BTK cezalarında tavan uygulanmaz.`
    },
    {
      code: "TR-TELCO-SOW-02",
      title: "02. Teknik Şartname ve İş Tanımı (SOW)",
      desc: "Cloud-native Kubernetes mimarisi, GSMA eSIM RSP, 5G CHF/OCS motoru, Kafka veri akışı ve 30.000 TPS yük kriterleri.",
      tags: ["SOW", "GSMA RSP", "5G CHF", "Kafka"],
      path: "../tr/02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md",
      content: `### Fonksiyonel Modüller:
1. **eSIM Uzaktan SIM Provizyonlama (RSP):** GSMA SGP.22 / SGP.32 tam uyumlu, Apple Quick Transfer ve Android Push aktivasyonu.
2. **5G/4G Gerçek Zamanlı Ücretlendirme Motoru (CHF/OCS):** 3GPP Rel-16/17, Diameter Ro/Gy ve HTTP/2 Nchf servisleri.
3. **Abone ve Paket Yaşam Döngüsü (BSS Core):** MNP takas entegrasyonu, dinamik tarife ve kota orkestrasyonu.
4. **Fraud & SIM-Swap Modülü:** Bankacılık için anlık SIM-Swap Check API (< 2 saniye alarm).
5. **BTK & KVKK Log Kasası:** SHA-256 zaman damgalı WORM depolama, 2 yıl saklama zorunluluğu.`
    },
    {
      code: "TR-TELCO-SLA-03",
      title: "03. Hizmet Seviyesi Taahhüdü (SLA/SLO/SLI)",
      desc: "SLI ölçümleri, %99.999 ve %99.99 SLO hedefleri, P1-P4 MTTA/MTTR arıza süreleri, hata bütçesi ve ceza matrisi.",
      tags: ["SLA", "SLO", "Error Budget", "Ceza Matrisi"],
      path: "../tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md",
      content: `### Kritik SLA Taahhütleri:
- **Çekirdek Uptime:** %99.999 (Ayda 26.3 saniye kesinti hakkı)
- **Hata Bütçesi Politikası:** Kalan bütçe < %25 ise FEATURE FREEZE (Tüm yeni özellik dağıtımları durdurulur).
- **Arıza Müdahale Süreleri:**
  - P1 Blocker: MTTA <= 5 dk, MTTR <= 60 dk (7/24 War Room)
  - P2 Critical: MTTA <= 15 dk, MTTR <= 4 saat
- **Ceza Matrisi:**
  - %99.95 - %99.989: %10 Hizmet Kredisi
  - %99.90 - %99.949: %25 Hizmet Kredisi
  - < %99.50: %100 Fatura İptali + Haklı Fesih`
    },
    {
      code: "TR-TELCO-LIC-04",
      title: "04. SaaS Abonelik ve Lisans Sözleşmesi",
      desc: "Özel tahsisli bulut modeli (Dedicated Private Cloud), abone baremleri, TPS kapasitesi ve N-1 sürüm desteği.",
      tags: ["Lisans", "Dedicated VPC", "N-1 Support", "Exit"],
      path: "../tr/04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md",
      content: `### Lisans Hükümleri:
- **Yasak:** Genel çok kiracılı (public multi-tenant) altyapıda barındırma yasaktır; tahsisli bare-metal Kubernetes kümesi zorunludur.
- **Kapasite Kademeleri:**
  - 0-20M Abone: 185.000 USD/Ay (25.000 TPS)
  - 20-35M Abone: 245.000 USD/Ay (35.000 TPS)
  - 35-50M+ Abone: 295.000 USD/Ay (50.000 TPS)
- **Çıkış Yönetimi:** NIST SP 800-88 standardında sertifikalı veri imhası.`
    },
    {
      code: "TR-TELCO-DPA-05",
      title: "05. Veri İşleme Sözleşmesi (DPA - BTK & KVKK)",
      desc: "5809 Sayılı Kanun, Veri Egemenliği (Yurt dışına veri çıkarma yasağı), IMSI/IMEI/MSISDN koruması ve 72 saat kuralı.",
      tags: ["BTK", "KVKK", "Veri Egemenliği", "mTLS"],
      path: "../tr/05_VERI_ISLEME_VE_REGULASYON_SOZLESMESI_DPA_BTK_KVKK.md",
      content: `### Regülasyon ve Güvenlik Kuralları:
- **Veri Egemenliği:** Türkiye sınırları dışına tek bir CDR, IPDR veya abone kimlik kaydı aktarılamaz.
- **Kriptografik Güvenlik:** mTLS v1.3, AES-256 at-rest, HSM ve HashiCorp Vault anahtar yönetimi.
- **İhlal Bildirimi:** Operatöre azami 24 saatte ihlal uyarısı, BTK ve KVKK'ya 72 saatte yasal bildirim.
- **İdari Para Cezaları:** Tedarikçi kusuru nedeniyle kesilecek cezalar doğrudan rücu edilir.`
    },
    {
      code: "TR-TELCO-NDA-06",
      title: "06. Gizlilik ve Sır Saklama Sözleşmesi (NDA)",
      desc: "Şebeke topolojisi, HSM anahtarları, 500.000 USD cezai şart, ChatGPT ve genel platform yasağı.",
      tags: ["NDA", "500k USD Ceza", "ISO 27001", "Sır"],
      path: "../tr/06_GIZLILIK_VE_SIR_SAKLAMA_SOZLESMESI_NDA.md",
      content: `### Gizlilik Yükümlülükleri:
- **Gizli Bilgi Kapsamı:** Şebeke topolojisi, frekans tahsisleri, HSM şeması, kaynak kodlar ve CDR kayıtları.
- **Geliştirici Yasakları:** Kod parçalarının genel GitHub'a veya kamuya açık AI araçlarına yüklenmesi yasaktır.
- **Cezai Şart:** İhlal başına 500.000 USD sabit cezai şart ve ihtiyati tedbir hakkı.
- **Geçerlilik:** Sözleşme bitiminden sonra 5 yıl, şebeke güvenliği ve kripto sırlar için süresiz.`
    },
    {
      code: "TR-TELCO-INC-07",
      title: "07. Olay Yönetimi ve Eskalasyon Matrisi",
      desc: "L1-L4 destek katmanları, P1 War Room protokolü, Incident Commander adabı ve 5-Why kök neden analizi (RCA).",
      tags: ["War Room", "P1 Incident", "RCA", "5-Why"],
      path: "../tr/07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md",
      content: `### Olay Müdahale Prensipleri:
- **L1-L4 Hiyerarşisi:** Operatör NOC (L1) -> TelcoCloud SRE (L2) -> Çekirdek Mühendislik (L3) -> Donanım Üreticisi (L4).
- **P1 War Room:** 3 dakika içinde sanal köprü açılır. PagerDuty ile acil çağrı yapılır.
- **Altın Kural:** "Önce kurtar (Rollback/DR switch), sonra araştır!"
- **İletişim:** P1 süresince üst yönetime her 15 dakikada bir durum özeti gönderilir.
- **RCA:** Olaydan sonraki 5 iş günü içinde 5-Why analizi ile resmi rapor teslim edilir.`
    },
    {
      code: "TR-TELCO-UAT-08",
      title: "08. Kabul Testleri ve Teslim Tutanağı (UAT)",
      desc: "30.000 TPS yük testi, failover kaos testi, pentest, 0 P1/P2 kabul barajı ve resmi tutanak şablonu.",
      tags: ["UAT", "30k TPS Test", "Chaos DR", "Kabul"],
      path: "../tr/08_KABUL_TESTLERI_VE_TESLIM_TUTANAGI_UAT.md",
      content: `### UAT Aşamaları:
1. Fonksiyonel FAT testleri (482 test senaryosu).
2. 4 saat boyunca 30.000 TPS kesintisiz yük testi (p99 < 45ms).
3. Veri merkezi kesme kaos testi (90 saniyede RPO=0 devralma).
4. Siber güvenlik ve penetrasyon testi (Sıfır kritik/yüksek bulgu).
- **Kabul Barajı:** 0 P1, 0 P2. Azami 3 adet P3 ile Koşullu Kabul mümkündür.`
    },
    {
      code: "TR-TELCO-ESC-09",
      title: "09. Kaynak Kod Yediemin Sözleşmesi (Escrow)",
      desc: "TÜBİTAK BİLGEM nezdinde kod saklama, iflas durumunda emanet açılma şartları ve iş sürekliliği.",
      tags: ["Escrow", "TÜBİTAK", "İflas Güvencesi", "IaC"],
      path: "../tr/09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md",
      content: `### Escrow Amacı:
Telekom kritik ulusal altyapıdır. Yazılım şirketinin iflas etmesi veya desteği bırakması durumunda 50 milyon abonenin kesintiye uğramasını önler.
- **Emanetçi:** TÜBİTAK BİLGEM / Bağımsız Güven Saklama Merkezi.
- **Emanet Edilenler:** Kaynak kodlar, Helm chart'ları, DB şemaları ve çevrimdışı bağımlılık arşivi.
- **Açılma Şartı:** Yalnızca iflas, terk etme veya ağır mevzuat ihlalinde noter huzurunda açılır.`
    },
    {
      code: "TR-TELCO-CHG-10",
      title: "10. Değişiklik ve Sürüm Yönetimi (RFC/CR)",
      desc: "Telekom Change Freeze (Yılbaşı/Bayram dondurması), CAB onayları, Canary dağıtımı ve otomatik geri alma.",
      tags: ["Change Freeze", "CAB", "Canary", "Rollback"],
      path: "../tr/10_DEGISIKLIK_VE_SURUM_YONETIMI_RFC_CR.md",
      content: `### Sürüm ve Dağıtım Kuralları:
- **Change Freeze:** 20 Aralık - 05 Ocak, dini bayramlar ve seçim günlerinde prod ortamına kesinlikle kod atılamaz!
- **CAB Onayı:** Tüm majör ve minör değişiklikler Değişiklik Kurulu'ndan onay almak zorundadır.
- **Kanarya Dağıtımı:** %1 -> %10 -> %100 kademeli açılış.
- **Otomatik Rollback:** Hata oranı > %0.05 veya p99 > 60ms olursa sistem 10 saniyede otomatik geri alınır.
- **Kapsam Dışı Adam-Gün Ücreti:** 850 USD / Adam-Gün.`
    }
  ],
  en: [
    {
      code: "EN-TELCO-DOC-00",
      title: "00. Executive Summary & Project Overview",
      desc: "Comprehensive roadmap between NexusTel & TelcoCloud, covering 25,000 TPS, 99.999% core uptime, and cloud-native architecture.",
      tags: ["Overview", "Architecture", "TPS", "Uptime"],
      path: "../en/00_EXECUTIVE_SUMMARY_AND_PROJECT_OVERVIEW.md",
      content: `### 1. Parties to the Agreement
- **OPERATOR:** NexusTel Global Telecommunications Corp. (48M Active Mobile, 5G SA/NSA, Fiber Backbone)
- **SAAS PROVIDER:** TelcoCloud Enterprise Network & Software Technologies Inc. (BSS/OSS, 5G CHF, GSMA RSP)

### 2. Scope: "TelcoPulse Omni-BSS Platform"
A microservices-driven, Kubernetes-native BSS suite operating at 25,000 TPS peak capacity with 99.999% core availability under a 36-month enterprise SaaS contract.

### 3. Vital SLAs:
- Core Engine Uptime: 99.999% (Max 26 seconds monthly outage)
- Overall Uptime: 99.99% (Max 4.38 minutes monthly outage)
- Peak Throughput: 25,000 TPS continuous
- Latency: p99 < 45 ms
- RPO = 0, RTO < 15 Minutes across Active-Active Dual Data Centers`
    },
    {
      code: "EN-TELCO-MSA-01",
      title: "01. Master Services Agreement (MSA)",
      desc: "Core legal framework, intellectual property rights (IPR), liability caps, termination clauses, and ISTAC arbitration.",
      tags: ["MSA", "IPR", "Liability Cap", "Arbitration"],
      path: "../en/01_MASTER_SERVICES_AGREEMENT_MSA.md",
      content: `### Key Legal Provisions:
- **Section 4 - Continuous SRE:** Binding commitments to 99.999% core availability and sub-45ms latency.
- **Section 5 - IPR Allocation:** Software intellectual property vests in TelcoCloud; subscriber and CDR data vests exclusively in Operator.
- **Section 6 - Commercials:** $1,250,000 implementation fee, $185,000/month recurring base fee (up to 20M subscribers).
- **Section 7 - Liability Cap:** Capped at previous 12 months' fees, excluding gross negligence, confidentiality breach, and regulatory data fines.`
    },
    {
      code: "EN-TELCO-SOW-02",
      title: "02. Statement of Work & Technical Specs (SOW)",
      desc: "Cloud-native Kubernetes architecture, GSMA eSIM RSP, 5G CHF/OCS engine, Kafka streaming, and 30,000 TPS load criteria.",
      tags: ["SOW", "GSMA RSP", "5G CHF", "Kafka"],
      path: "../en/02_STATEMENT_OF_WORK_AND_TECHNICAL_SPECIFICATIONS_SOW.md",
      content: `### Functional Deliverables:
1. **eSIM Remote SIM Provisioning (RSP):** GSMA SGP.22 / SGP.32 compliant, Apple Quick Transfer and Android Push support.
2. **5G/4G Real-Time Charging (CHF/OCS):** 3GPP Rel-16/17, Diameter Ro/Gy and HTTP/2 Nchf endpoints.
3. **Subscriber & Catalog BSS:** Real-time billing, catalog rules, and MNP clearinghouse integration.
4. **Fraud & SIM-Swap Guard:** Sub-2 second automated anomaly alerting for banking integration.
5. **Regulatory CDR Vault:** WORM storage with SHA-256 cryptographic timestamps and 2-year retention.`
    },
    {
      code: "EN-TELCO-SLA-03",
      title: "03. Service Level Agreement (SLA/SLO/SLI)",
      desc: "Mathematical SLI indicators, 99.999% SLO targets, P1-P4 MTTA/MTTR response times, error budget, and service credit matrix.",
      tags: ["SLA", "SLO", "Error Budget", "Penalties"],
      path: "../en/03_SERVICE_LEVEL_AGREEMENT_SLA_SLO_SLI.md",
      content: `### Carrier SLA Commitments:
- **Core Engine Availability:** 99.999% (Allowed monthly downtime: 26.3 seconds)
- **Error Budget Policy:** If remaining budget drops below 25%, a mandatory Feature Freeze takes effect immediately.
- **Incident Response MTTA / MTTR:**
  - P1 Blocker: MTTA <= 5 mins, MTTR <= 60 mins (24/7 War Room)
  - P2 Critical: MTTA <= 15 mins, MTTR <= 4 hours
- **Service Credit Penalties:**
  - 99.95% to 99.989%: 10% credit
  - 99.90% to 99.949%: 25% credit
  - < 99.50%: 100% credit (Free month) + right of termination`
    },
    {
      code: "EN-TELCO-LIC-04",
      title: "04. SaaS Subscription & License Agreement",
      desc: "Dedicated private cloud isolation, subscriber volume tiers, peak TPS capacity, and N-1 version deprecation policy.",
      tags: ["License", "Dedicated VPC", "N-1 Support", "Exit"],
      path: "../en/04_SAAS_SUBSCRIPTION_AND_LICENSE_AGREEMENT.md",
      content: `### Licensing Parameters:
- **Architecture Mandate:** Dedicated bare-metal Kubernetes deployment required; public multi-tenant commingling strictly prohibited.
- **Subscription Tiers:**
  - Tier 1 (0-20M Subs): $185,000 / month (25,000 TPS)
  - Tier 2 (20M-35M Subs): $245,000 / month (35,000 TPS)
  - Tier 3 (35M-50M+ Subs): $295,000 / month (50,000 TPS)
- **Data Sanitization:** Certified NIST SP 800-88 decommissioning upon exit.`
    },
    {
      code: "EN-TELCO-DPA-05",
      title: "05. Data Processing Agreement (DPA)",
      desc: "Statutory telecom data protections, Data Sovereignty (cross-border transfer prohibition), mTLS, and 72-hour breach rules.",
      tags: ["DPA", "Data Sovereignty", "Telecom Privacy", "mTLS"],
      path: "../en/05_DATA_PROCESSING_AGREEMENT_DPA_REGULATORY_COMPLIANCE.md",
      content: `### Compliance & Security Safeguards:
- **Data Sovereignty:** Absolute prohibition against transferring subscriber metadata or CDR traffic outside national territory.
- **Cryptographic Standards:** mTLS 1.3 throughout Istio service mesh, AES-256 at rest, HSM and Vault key management.
- **Breach Notification:** Initial alert to Operator within 24 hours; comprehensive forensic report within 36 hours for 72-hour statutory filing.`
    },
    {
      code: "EN-TELCO-NDA-06",
      title: "06. Non-Disclosure Agreement (NDA)",
      desc: "Carrier topology protection, HSM keys, $500,000 liquidated damages, and strict prohibition on public generative AI tool usage.",
      tags: ["NDA", "$500k Liquidated Damages", "ISO 27001"],
      path: "../en/06_NON_DISCLOSURE_AGREEMENT_NDA.md",
      content: `### Confidentiality Terms:
- **Classified Assets:** Core network routing, frequency plans, cryptographic HSM schemas, and subscriber metrics.
- **Engineering Prohibitions:** Pasting internal endpoints or telecom code into public AI tools (ChatGPT) or public GitHub repositories is strictly prohibited.
- **Liquidated Damages:** USD $500,000 per violation plus right to immediate injunctive relief.
- **Term:** 5 years post-agreement; perpetual for network security and cryptographic keys.`
    },
    {
      code: "EN-TELCO-INC-07",
      title: "07. Incident Management & Escalation Matrix",
      desc: "Tier-1 through Tier-4 support framework, 24/7 War Room protocol, Incident Commander hierarchy, and 5-Why RCA templates.",
      tags: ["War Room", "P1 Incident", "RCA", "5-Why"],
      path: "../en/07_INCIDENT_MANAGEMENT_AND_ESCALATION_MATRIX.md",
      content: `### Incident Operations:
- **Support Tiers:** Operator NOC (T1) -> SRE On-Call (T2) -> Core Engineering (T3) -> Upstream Vendors (T4).
- **P1 War Room:** Automated bridge established within 3 minutes; Senior SRE serves as Incident Commander.
- **Prime Directive:** "Mitigate first (Rollback / Failover), investigate second!"
- **Communication:** Executive briefing updates dispatched every 15 minutes during P1 events.
- **Post-Mortem:** Blameless 5-Why Root Cause Analysis delivered within 5 business days.`
    },
    {
      code: "EN-TELCO-UAT-08",
      title: "08. Acceptance Testing & Sign-Off (UAT)",
      desc: "30,000 TPS load testing, chaos failover validation, zero P1/P2 defect gating, and legal UAT certificate template.",
      tags: ["UAT", "30k TPS Benchmark", "Chaos DR", "Sign-Off"],
      path: "../en/08_ACCEPTANCE_TESTING_AND_SIGNOFF_UAT.md",
      content: `### Acceptance Methodology:
1. Functional FAT validation (482 test scripts).
2. Continuous 4-hour 30,000 TPS load test (p99 latency < 45ms).
3. Primary data center disconnection chaos test (Failover < 90 seconds, RPO=0).
4. Independent penetration test (Zero critical/high findings).
- **Gating Criteria:** 0 P1, 0 P2 defects. Conditional acceptance permitted with max 3 P3 bugs.`
    },
    {
      code: "EN-TELCO-ESC-09",
      title: "09. Source Code Escrow Agreement",
      desc: "Independent escrow custody with national authorities, release triggers upon insolvency or abandonment, and clean-slate builds.",
      tags: ["Escrow", "Insolvency Protection", "IaC", "Continuity"],
      path: "../en/09_SOURCE_CODE_ESCROW_AND_BUSINESS_CONTINUITY.md",
      content: `### Escrow Safeguards:
Telecommunications networks are critical national infrastructure. Escrow protects the operator against vendor insolvency or sudden cessation of operations.
- **Escrow Agent:** Neutral third-party software escrow authority (TÜBİTAK BİLGEM / NCC Group).
- **Deposit Materials:** Source code, Helm charts, DB DDL scripts, and offline binary dependencies.
- **Release Conditions:** Triggered strictly upon legal insolvency, abandonment of SLA support, or material regulatory default.`
    },
    {
      code: "EN-TELCO-CHG-10",
      title: "10. Change Management & Release Procedure",
      desc: "Telecom Change Freeze windows, Change Advisory Board (CAB) governance, canary rollouts, and automated GitOps rollback.",
      tags: ["Change Freeze", "CAB", "Canary", "Rollback"],
      path: "../en/10_CHANGE_MANAGEMENT_AND_RELEASE_PROCEDURE.md",
      content: `### Deployment Governance:
- **Change Freeze Windows:** Dec 20 to Jan 05, religious holidays, and national election periods prohibit all production releases.
- **CAB Gatekeeping:** Normal releases require 10 business days advance submission and dual-party CAB signoff.
- **Canary Rollout:** 1% -> 10% -> 100% traffic progression.
- **Automated Rollback:** Triggered within 10 seconds if 5xx errors exceed 0.05% or latency exceeds 60ms.
- **Out-of-Scope Engineering Rate:** USD $850 per Man-Day.`
    }
  ]
};

const guideChapters = [
  {
    num: "Bölüm 00",
    title: "Giriş: Kod Yazmak Yetmez mi?",
    summary: "Şirketler neden 100 sayfa sözleşme imzalar? Yazılımcının görünmeyen mimarisi.",
    path: "../muhendis-rehberi/00_GIRIS_VE_SOZLESMELER_NEDEN_VAR.md"
  },
  {
    num: "Bölüm 01",
    title: "MSA Nedir? Yazılımcıyı Nasıl Bağlar?",
    summary: "Fikri mülkiyet (IPR), şirket kodu ile müşteri verisi ayrımı ve sorumluluk tavanı.",
    path: "../muhendis-rehberi/01_MSA_NEDIR_YAZILIMCIYI_NASIL_BAGLAR.md"
  },
  {
    num: "Bölüm 02",
    title: "SOW ve Şartname: Scope Creep Tuzağı",
    summary: "Müşteri 'şunu da ekleyiver' dediğinde neden hemen 'yaparım' dememelisin?",
    path: "../muhendis-rehberi/02_SOW_VE_SARTNAME_KOD_YAZARKEN_NASIL_KULLANILIR.md"
  },
  {
    num: "Bölüm 03",
    title: "SLA, SLO, SLI ve Hata Bütçesi",
    summary: "%99.99 Uptime ne demek? Ayda 4.38 dakika çökme hakkı ve Feature Freeze.",
    path: "../muhendis-rehberi/03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md"
  },
  {
    num: "Bölüm 04",
    title: "Telekomda 25.000 TPS ve p99 < 45ms",
    summary: "Neden ortalama gecikme yalandır? N+1 sorgusu ve connection pool hataları.",
    path: "../muhendis-rehberi/04_TELEKOM_VE_YUKSEK_TRAFIK_TPS_LATENCY_CEZALARI.md"
  },
  {
    num: "Bölüm 05",
    title: "BTK, KVKK ve Loglardaki Büyük Hatalar",
    summary: "console.log'a IMSI/MSISDN basmak neden suçtur? Veri egemenliği ilkesi.",
    path: "../muhendis-rehberi/05_BTK_KVKK_VE_LOGLARDA_YAPILAN_BUYUK_HATALAR.md"
  },
  {
    num: "Bölüm 06",
    title: "NDA ve Ticari Sırlar: Acemi Hataları",
    summary: "GitHub'a token pushlamak, ChatGPT'ye telekom kodu yapıştırmak ve 500k USD ceza.",
    path: "../muhendis-rehberi/06_NDA_VE_TICARI_SIRLAR_ACEMI_HATALARI.md"
  },
  {
    num: "Bölüm 07",
    title: "Gece 03:00'te Telefon Çalarsa (P1 & War Room)",
    summary: "Önce kurtar, sonra araştır prensibi, Incident Commander adabı ve blameless RCA.",
    path: "../muhendis-rehberi/07_ARIZA_YONETIMI_VE_P1_OLAYINDA_NE_YAPILMALI.md"
  },
  {
    num: "Bölüm 08",
    title: "Kabul Testleri (UAT) ve Koşullu Kabul",
    summary: "'Lokalimde çalışıyordu' neden sayılmaz? Bug vs Feature Request ayrımı.",
    path: "../muhendis-rehberi/08_KABUL_TESTLERI_UAT_VE_KOSULLU_KABUL.md"
  },
  {
    num: "Bölüm 09",
    title: "Escrow (Kod Yediemini) ve Felaket Kurtarma",
    summary: "Kodumuzu neden TÜBİTAK kasasına teslim ediyoruz? Clean Slate Build kuralı.",
    path: "../muhendis-rehberi/09_ESCROW_KOD_YEDIEMIN_VE_FELAKET_KURTARMA.md"
  },
  {
    num: "Bölüm 10",
    title: "Change Freeze ve Sürüm Yönetimi",
    summary: "Yılbaşı gecesi prod'a kod atılmaz! CAB onayları ve otomatik canary rollback.",
    path: "../muhendis-rehberi/10_CHANGE_FREEZE_VE_SURUM_YONETIMI.md"
  }
];

const quizQuestions = [
  {
    q: "Telekom müşterisi sizden canlı ortamda 31 Aralık günü saat 17:00'de acil olmayan ufak bir buton rengi değişikliği deploy etmenizi istedi. Ne yapmalısınız?",
    options: [
      "Hemen kubectl ile pod'u güncellerim, 2 dakikalık iş.",
      "Müşteriye Change Freeze döneminde olduğumuzu, P1 acil durum haricinde prod'a kod atılamayacağını ve talebi Ocak ayına planlayacağımızı söylerim.",
      "Kodu doğrudan veritabanından patch ederim.",
      "Yöneticime haber vermeden sessizce atarım."
    ],
    answer: 1,
    exp: "Doğru! 20 Aralık - 05 Ocak tarihleri arasında Change Freeze uygulanır. Yılbaşı gecesi yoğun telekom trafiği öncesinde hiçbir acil olmayan değişiklik prod'a atılamaz!"
  },
  {
    q: "Aylık %99.99 Uptime taahhüt edilen bir sistemde aylık izin verilen maksimum kesinti süresi yaklaşık ne kadardır?",
    options: [
      "Yaklaşık 4.38 dakika",
      "Yaklaşık 43.8 dakika",
      "Yaklaşık 7 saat",
      "26 saniye"
    ],
    answer: 0,
    exp: "Doğru! Bir ayda 43.200 dakika vardır. %99.99 uptime demek, %0.01 hata payı yani 43.200 * 0.0001 = 4.32 dakika kesinti hakkı demektir."
  },
  {
    q: "Bir mikroserviste hata ayıklamak için abonenin telefon numarasını (MSISDN), IMSI'sini ve eSIM profil aktivasyon kodunu açık metin olarak console.log'a basarsanız ne olur?",
    options: [
      "Hiçbir şey olmaz, loglar sadece geliştiriciler içindir.",
      "Sistem daha hızlı debug edilir.",
      "BTK ve KVKK'ya göre telekom sırrı ve kişisel veri güvenliği ihlal edilmiş olur, ağır para cezası doğar.",
      "Kubernetes otomatik olarak logları şifreler."
    ],
    answer: 2,
    exp: "Doğru! Telekomünikasyon verileri anayasal haberleşme gizliliğine ve BTK mevzuatına tabidir. PII ve şebeke kimlikleri açık metin olarak loglara asla basılamaz; maskelenmelidir!"
  },
  {
    q: "Gece saat 03:00'te P1 arızasıyla (5G şarj motoru çöktü) uyandırıldığınızda ve War Room köprüsüne girdiğinizde ilk hedefiniz ne olmalıdır?",
    options: [
      "Kodu kimin yazdığını bulup onu suçlamak.",
      "Hemen son 2 saatte yapılan deployment'ı Rollback yapmak veya trafiği yedek Veri Merkezine (Ankara DR) aktararak servisi hızla ayağa kaldırmak.",
      "Kodun 250. satırına breakpoint koyup adım adım debug etmek.",
      "Sabah mesai saati 09:00'a kadar uyumaya devam etmek."
    ],
    answer: 1,
    exp: "Doğru! Altın kural: 'Önce kurtar (Mitigate), sonra araştır (Investigate)'. İlk amaç kesinti sayacını durdurmak ve aboneleri kurtarmaktır."
  },
  {
    q: "Hata Bütçesi (Error Budget) %80 oranında tükendiğinde ve sarı/kırmızı alarma geçtiğinde SRE ve yazılım ekibi ne yapmalıdır?",
    options: [
      "Daha hızlı yeni özellik (feature) geliştirmelidir.",
      "Feature Freeze ilan edilmeli, yeni özellik dağıtımları durdurulmalı ve tüm mühendislik eforu stabilite ve bug temizliğine ayrılmalıdır.",
      "Grafana panosunu kapatmalıdır.",
      "Müşteriye SLA taahhüdünün iptal edildiğini bildirmelidir."
    ],
    answer: 1,
    exp: "Doğru! Hata bütçesi kritik eşiğin altına indiğinde sistem kararlılığı sağlanana kadar yeni özellik çıkışı dondurulur (Feature Freeze)."
  }
];

let currentQuizIndex = 0;
let quizScore = 0;

// Initialize Web App
document.addEventListener('DOMContentLoaded', () => {
  renderContracts();
  renderGuides();
  setupLanguageSwitch();
  setupCalculator();
  setupQuiz();
  setupModal();
});

function setupLanguageSwitch() {
  const btnTR = document.getElementById('btnLangTR');
  const btnEN = document.getElementById('btnLangEN');

  btnTR.addEventListener('click', () => {
    currentLang = 'tr';
    btnTR.classList.add('active');
    btnEN.classList.remove('active');
    updateUILanguage();
  });

  btnEN.addEventListener('click', () => {
    currentLang = 'en';
    btnEN.classList.add('active');
    btnTR.classList.remove('active');
    updateUILanguage();
  });
}

function updateUILanguage() {
  if (currentLang === 'tr') {
    document.getElementById('heroBadgeText').textContent = "Tier-1 Telekom & Bulut-Yerel SaaS Sözleşme Süiti";
    document.getElementById('heroTitle').innerHTML = `Telekom Operatörü & SaaS Sağlayıcı<br><span class="gradient-text">Kurumsal SLA, Hukuk ve Mühendislik Süiti</span>`;
    document.getElementById('heroDesc').innerHTML = `<strong>TürkTel Global İletişim A.Ş.</strong> (48M Abone) ile <strong>TelcoCloud A.Ş.</strong> arasındaki 25.000 TPS, %99.999 Çekirdek Uptime, GSMA eSIM ve BTK/KVKK uyumlu gerçek zamanlı BSS projesinin tüm yasal sözleşmeleri, teknik şartnameleri ve acemi mühendis rehberi.`;
    document.getElementById('contractsHeading').textContent = "Kurumsal Sözleşme Paketi";
    document.getElementById('contractsSub').textContent = "İki dilde (Türkçe & İngilizce) hazırlanmış, telekomünikasyon sektörüne özel 11 tam kapsamlı yasal enstrüman.";
  } else {
    document.getElementById('heroBadgeText').textContent = "Tier-1 Telecom & Cloud-Native SaaS Legal Suite";
    document.getElementById('heroTitle').innerHTML = `Telecom Operator & SaaS Provider<br><span class="gradient-text">Enterprise SLA, Legal & Engineering Suite</span>`;
    document.getElementById('heroDesc').innerHTML = `End-to-end contractual instruments, technical specifications, and engineer guide governing a 25,000 TPS, 99.999% Core Uptime 5G BSS & eSIM deployment between <strong>NexusTel Corp</strong> (48M Subs) and <strong>TelcoCloud Inc</strong>.`;
    document.getElementById('contractsHeading').textContent = "Enterprise Contract Suite";
    document.getElementById('contractsSub').textContent = "11 comprehensive legal and technical instruments tailored for carrier-grade telecommunications.";
  }
  renderContracts();
  calculatePenalty();
}

function renderContracts() {
  const container = document.getElementById('contractCardsContainer');
  container.innerHTML = '';
  const list = contractsData[currentLang];

  list.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contract-card';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-code">${c.code}</span>
        <h3 class="card-title">${c.title}</h3>
        <p class="card-desc">${c.desc}</p>
        <div class="card-tags">
          ${c.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer">
        <span class="view-btn">
          ${currentLang === 'tr' ? 'Dokümanı Oku' : 'View Document'} &rarr;
        </span>
      </div>
    `;
    card.addEventListener('click', () => openDocModal(c));
    container.appendChild(card);
  });
}

function renderGuides() {
  const container = document.getElementById('guideChaptersContainer');
  container.innerHTML = '';

  guideChapters.forEach(g => {
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.innerHTML = `
      <div class="guide-num">${g.num}</div>
      <h4 class="guide-title">${g.title}</h4>
      <p class="guide-summary">${g.summary}</p>
    `;
    card.addEventListener('click', () => {
      openDocModal({
        code: g.num,
        title: g.title,
        content: `### ${g.title}\n\n${g.summary}\n\n> Bu bölümün tam içeriğini repo içerisindeki [muhendis-rehberi] dizininden okuyabilirsiniz.`
      });
    });
    container.appendChild(card);
  });
}

// Modal handling
function setupModal() {
  const modal = document.getElementById('docModal');
  const closeBtn = document.getElementById('btnModalClose');
  const closeBtn2 = document.getElementById('btnModalClose2');
  const copyBtn = document.getElementById('btnCopyDocLink');

  function closeModal() {
    modal.classList.remove('show');
  }

  closeBtn.addEventListener('click', closeModal);
  closeBtn2.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    copyBtn.textContent = currentLang === 'tr' ? 'Kopyalandı! ✓' : 'Copied! ✓';
    setTimeout(() => {
      copyBtn.textContent = currentLang === 'tr' ? 'Bağlantıyı Kopyala' : 'Copy Link';
    }, 2000);
  });
}

function openDocModal(doc) {
  const modal = document.getElementById('docModal');
  document.getElementById('modalDocCode').textContent = doc.code;
  document.getElementById('modalDocTitle').textContent = doc.title;
  
  // Format simple markdown into HTML
  let formatted = doc.content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '<p></p>')
    .replace(/\n/gim, '<br>');

  document.getElementById('modalDocContent').innerHTML = formatted;
  modal.classList.add('show');
}

// SLA & Penalty Calculator Logic
function setupCalculator() {
  const uptimeSlider = document.getElementById('uptimeSlider');
  const p1Slider = document.getElementById('p1DurationSlider');
  const subsSlider = document.getElementById('subscribersSlider');

  uptimeSlider.addEventListener('input', calculatePenalty);
  p1Slider.addEventListener('input', calculatePenalty);
  subsSlider.addEventListener('input', calculatePenalty);

  calculatePenalty();
}

function calculatePenalty() {
  const uptime = parseFloat(document.getElementById('uptimeSlider').value);
  const p1Duration = parseInt(document.getElementById('p1DurationSlider').value);
  const subs = parseInt(document.getElementById('subscribersSlider').value);

  // Update slider badges
  document.getElementById('uptimeVal').textContent = uptime.toFixed(3) + "%";
  document.getElementById('p1Val').textContent = p1Duration + (currentLang === 'tr' ? " Dakika" : " Mins");
  document.getElementById('subsVal').textContent = subs + (currentLang === 'tr' ? " Milyon" : " Million");

  // Determine Base SaaS Monthly Fee based on subscriber tier
  let baseFee = 185000;
  if (subs > 20 && subs <= 35) {
    baseFee = 245000;
  } else if (subs > 35) {
    baseFee = 295000;
  }
  document.getElementById('baseFeeDisplay').textContent = "$" + baseFee.toLocaleString() + (currentLang === 'tr' ? " / Ay" : " / Mo");

  // Calculate Allowed vs Actual Downtime in 30-day month (43,200 mins)
  const totalMonthMins = 43200;
  const allowedDowntimeMins = totalMonthMins * (1 - 0.9999); // 4.32 mins allowed for 99.99%
  const actualDowntimeMins = totalMonthMins * (1 - (uptime / 100));

  document.getElementById('allowedDowntimeDisplay').textContent = "4.32 " + (currentLang === 'tr' ? "Dakika" : "Mins");
  document.getElementById('actualDowntimeDisplay').textContent = actualDowntimeMins.toFixed(2) + " " + (currentLang === 'tr' ? "Dakika" : "Mins");

  // Error budget consumption percentage
  const errorBudgetConsumed = (actualDowntimeMins / allowedDowntimeMins) * 100;
  const ebEl = document.getElementById('errorBudgetStatusDisplay');
  if (errorBudgetConsumed <= 100) {
    ebEl.textContent = `%${errorBudgetConsumed.toFixed(0)} ` + (currentLang === 'tr' ? "Tüketildi (Normal)" : "Consumed (Healthy)");
    ebEl.style.color = "var(--accent-green)";
  } else {
    ebEl.textContent = `%${errorBudgetConsumed.toFixed(0)} ` + (currentLang === 'tr' ? "Tüketildi (AŞILDI!)" : "Consumed (BREACHED!)");
    ebEl.style.color = "var(--accent-red)";
  }

  // Calculate Service Credit Percentage
  let penaltyPercent = 0;
  if (uptime >= 99.99) {
    penaltyPercent = 0;
  } else if (uptime >= 99.95) {
    penaltyPercent = 10;
  } else if (uptime >= 99.90) {
    penaltyPercent = 25;
  } else if (uptime >= 99.50) {
    penaltyPercent = 50;
  } else {
    penaltyPercent = 100;
  }

  // P1 MTTR surcharge: MTTR limit is 60 mins. Each extra 30 mins adds 5% penalty
  if (p1Duration > 60) {
    const extraMinutes = p1Duration - 60;
    const additionalSteps = Math.ceil(extraMinutes / 30);
    penaltyPercent += additionalSteps * 5;
    if (penaltyPercent > 100) penaltyPercent = 100;
  }

  const penaltyAmount = (baseFee * penaltyPercent) / 100;

  // Update display
  const penaltyAmountEl = document.getElementById('penaltyAmountDisplay');
  const penaltyPercentEl = document.getElementById('penaltyPercentDisplay');
  const mainBox = document.querySelector('.result-box.main-box');
  const banner = document.getElementById('complianceBanner');
  const bannerText = document.getElementById('complianceText');

  penaltyAmountEl.textContent = "$" + penaltyAmount.toLocaleString();
  
  if (penaltyPercent === 0) {
    penaltyPercentEl.textContent = currentLang === 'tr' ? "Tüm SLA Taahhütleri Sağlandı (%0 Ceza)" : "Fully SLA Compliant (0% Penalty)";
    mainBox.classList.add('compliant');
    banner.className = "compliance-badge-banner success";
    banner.innerHTML = `<span class="status-icon">✓</span> <span>${currentLang === 'tr' ? 'Sistem Mükemmel: Hata bütçesi korunuyor, yeni özellik dağıtımları serbest.' : 'System Nominal: Error budget healthy, feature deployments permitted.'}</span>`;
  } else {
    penaltyPercentEl.textContent = (currentLang === 'tr' ? "Aylık Faturanın %" : "Deduction: ") + penaltyPercent + (currentLang === 'tr' ? "'si" : "% of Monthly Invoice");
    mainBox.classList.remove('compliant');
    banner.className = "compliance-badge-banner";
    banner.innerHTML = `<span class="status-icon">⚠️</span> <span>${currentLang === 'tr' ? `SLA İhlali Mevcut: Faturadan $${penaltyAmount.toLocaleString()} ceza mahsup edilir. Feature Freeze uygulanmalıdır!` : `SLA Breach: $${penaltyAmount.toLocaleString()} deducted from invoice. Mandatory Feature Freeze!`}</span>`;
  }
}

// Junior Engineer Interactive Quiz
function setupQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();

  document.getElementById('btnNextQuestion').addEventListener('click', () => {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });
}

function renderQuizQuestion() {
  const q = quizQuestions[currentQuizIndex];
  document.getElementById('quizProgress').textContent = `Soru ${currentQuizIndex + 1} / ${quizQuestions.length}`;
  document.getElementById('quizScore').textContent = `Skor: ${quizScore}`;
  document.getElementById('quizQuestionText').textContent = q.q;

  const optionsContainer = document.getElementById('quizOptionsContainer');
  optionsContainer.innerHTML = '';

  const expEl = document.getElementById('quizExplanation');
  expEl.style.display = 'none';
  document.getElementById('btnNextQuestion').style.display = 'none';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(idx, q.answer, q.exp));
    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIdx, correctIdx, explanation) {
  const options = document.querySelectorAll('.quiz-opt-btn');
  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  if (selectedIdx === correctIdx) {
    quizScore += 20;
    document.getElementById('quizScore').textContent = `Skor: ${quizScore}`;
  }

  const expEl = document.getElementById('quizExplanation');
  expEl.textContent = explanation;
  expEl.style.display = 'block';

  document.getElementById('btnNextQuestion').style.display = 'inline-block';
}

function showQuizResults() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = `
    <div style="text-align: center; padding: 30px 10px;">
      <div style="font-size: 3rem; margin-bottom: 12px;">🏆</div>
      <h3 style="font-size: 1.8rem; margin-bottom: 8px;">Sınav Tamamlandı!</h3>
      <p style="font-size: 1.2rem; color: var(--accent-cyan); font-weight: 700; margin-bottom: 16px;">
        Toplam Puanınız: ${quizScore} / 100
      </p>
      <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 24px;">
        ${quizScore >= 80 ? 'Tebrikler! Telekom sözleşmeleri ve SRE prensipleri konusunda tam bir profesyonelsiniz!' : 'Güzel deneme! Rehberdeki ilgili bölümleri tekrar gözden geçirerek seviyenizi artırabilirsiniz.'}
      </p>
      <button class="btn btn-primary" onclick="location.reload()">Sınavı Tekrar Çöz</button>
    </div>
  `;
}
