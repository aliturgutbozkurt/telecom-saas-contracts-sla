# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Teknik Şartname ve İş Tanımı Belgesi (Statement of Work - SOW)
**Doküman Kodu:** `TR-TELCO-SOW-2026-02`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-1  
**Sürüm:** `v1.2.0-TECHNICAL`  
**Tarih:** 18 Ekim 2026  

---

### 1. Amaç ve Kapsam

İşbu Teknik Şartname ve İş Tanımı Belgesi ("SOW"), TÜRK-TEL'in yeni nesil telekomünikasyon altyapısı için TELCOCLOUD tarafından tedarik edilecek, kurulacak ve 7/24 SaaS modeliyle işletilecek **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** platformunun mimari gereksinimlerini, fonksiyonel modüllerini, dış sistem entegrasyonlarını, performans metriklerini ve faz teslimat takvimini eksiksiz olarak belirler.

---

### 2. Mimari Prensipler ve Teknoloji Yığını

Platform, telekomünikasyon sektörünün en katı güvenilirlik ve düşük gecikme standartlarını karşılamak üzere bulut-yerel (cloud-native) mimaride tasarlanmıştır:

1. **Çalışma Ortamı:** Bare-metal Kubernetes (OpenShift / Vanilla K8s 1.30+) kümesi üzerinde microservice mimarisi.
2. **Konteyner ve Dağıtım:** OCI uyumlu konteynerler, GitOps tabanlı sürekli dağıtım (ArgoCD), Helm v3 grafik paketleri.
3. **Mesajlaşma ve Veri Akışı:** Apache Kafka (Clustered, 3x replication, multi-partition) ile saniyede 150.000 mesaj telemetri ve CDR akışı.
4. **Veritabanı Katmanı:**
   * **İşlemsel:** PostgreSQL 16 (Patroni ile Yüksek Erişilebilirlikli HA Cluster).
   * **Önbellek & Anlık Sayaç:** Dağıtık Redis Cluster (In-Memory, Quota & Session Cache, < 2ms erişim).
   * **Analitik ve CDR Arşivi:** ClickHouse Dağıtık Kolon Bazlı Veritabanı (Milyarlarca CDR sorgusunda sub-second yanıt).
5. **Ağ ve Güvenlik:**
   * İstisnasız tüm servisler arası iletişimde mTLS (Mutual TLS v1.3 - Istio Service Mesh).
   * Zero-Trust prensibi, HashiCorp Vault ile donanımsal HSM (Hardware Security Module) destekli şifreleme anahtarı yönetimi.

```
+---------------------------------------------------------------------------------------------------+
|                         TELCOPULSE FONKSİYONEL SİSTEM MİMARİSİ                                    |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ KANAL / GİRİŞ ] ---> [ API GATEWAY (Kong/Envoy) - Rate Limiting & Auth Tokenization ]          |
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

### 3. Fonksiyonel Modüller ve Yetenekler

#### Modül 1: eSIM Uzaktan SIM Provizyonlama (Remote SIM Provisioning - RSP)
* **Standart:** GSMA SGP.22 (Tüketici Cihazları) ve SGP.32 (IoT Cihazları) spesifikasyonlarına %100 tam uyumluluk.
* **Fonksiyonlar:**
  * Profil siparişi, profil durum yönetimi (Allocated, Released, Installed, Enabled, Deleted).
  * Anlık dinamik aktivasyon kodu (LPA string ve QR Kod) üretimi.
  * Apple eSIM Quick Transfer ve Android GSMA Push aktivasyon protokollerinin desteklenmesi.
  * SM-DP+ sunucusu ile mTLS üzerinden HSM destekli dijital sertifika doğrulama (GSMA CI PKI).

#### Modül 2: 5G/4G Gerçek Zamanlı Ücretlendirme Motoru (CHF / OCS)
* **Standart:** 3GPP TS 32.296, TS 32.299 (Diameter Ro/Gy) ve TS 32.291 (5G Service Based Architecture HTTP/2 Nchf).
* **Fonksiyonlar:**
  * Ses, SMS ve yüksek hızlı veri oturumlarında saniyelik/megabaytlık gerçek zamanlı kota rezervasyonu ve düşümü.
  * Sıfır bakiye / paket aşımında milisaniyeler içinde data hız kısıtlama veya yönlendirme (Redirect/Throttle) tetiklemesi.
  * Çoklu SIM, ortak aile kotası ve kurumsal filo kotalarının dinamik paylaşımı.

#### Modül 3: Abone ve Paket Yaşam Döngüsü Yöneticisi (BSS Core)
* **Fonksiyonlar:**
  * Yeni abone aktivasyonu, numara taşıma (MNP - Mobile Number Portability) süreç orkestrasyonu.
  * Tarife değiştirme, ek paket satın alma, taahhüt yenileme motoru.
  * Fatura kesimi, otomatik tahsilat tetikleme ve borç nedeniyle hat kısıtlama/açma otomasyonu.

#### Modül 4: Fraud & SIM-Swap Güvenlik Modülü
* **Fonksiyonlar:**
  * Bankacılık ve finans kuruluşları için anlık API: "Bu numara son 48 saat içinde SIM değiştirdi mi?" (SIM-Swap Check API).
  * Ani baz istasyonu atlaması (Velocity check) ve şüpheli uluslararası yüksek maliyetli arama (IRSF) tespiti.
  * Şüpheli durumlarda hattı otomatik korumaya alma ve OPERATÖR Siber Olay Müdahale Ekibine (SOME) acil webhook alarmı üretme.

#### Modül 5: BTK & KVKK Denetim ve Trafik Log Kasası
* **Fonksiyonlar:**
  * Her bir çağrı, SMS ve data bağlantı kaydının (CDR/IPDR) 5809 Sayılı Elektronik Haberleşme Kanunu gereğince asgari 2 yıl boyunca silinemez ve değiştirilemez biçimde (WORM - Write Once Read Many) saklanması.
  * Log kayıtlarının günlük olarak TÜBİTAK Zaman Damgası ve SHA-256 özetleriyle mühürlenmesi.
  * KVKK uyumu için MSISDN, IMSI ve IMEI verilerinin arayüzlerde ve raporlarda dinamik olarak maskelenmesi (Örn: `+90 532 *** ** 12`).

---

### 4. Dış Sistem Entegrasyonları

| Dış Sistem | Protokol / Format | Yön | Açıklama |
| :--- | :--- | :--- | :--- |
| **HLR / HSS / UDM** | Diameter S6a / HTTP/2 Ud | Çift Yönlü | Abone profili ve şebeke kimlik sorgusu |
| **5G Core (AMF / SMF)** | HTTP/2 REST (3GPP Nchf) | Çift Yönlü | 5G oturum ve kota yönetimi |
| **PCRF / PCF** | Diameter Gx / HTTP/2 Npcf | Çift Yönlü | Politika ve bant genişliği kuralları |
| **SMSC Gateway** | SMPP v3.4 / REST | Çift Yönlü | OTP, aktivasyon ve bilgilendirme SMS'leri |
| **Ulusal MNP Merkezi** | XML over SOAP / mTLS | Çift Yönlü | Numara taşıma merkezi takas entegrasyonu |
| **BTK Log Arayüzü** | Güvenli SFTP / WebService | Çıkış | Yasal denetim veri akışı |

---

### 5. Performans, Kapasite ve Kalite Kriterleri

1. **İşlem Hacmi (Throughput):** Normal şartlarda 10.000 TPS, yoğun saatlerde (Busy Hour) kesintisiz **25.000 TPS**, anlık piklerde ise **40.000 TPS** (kuyruğa alarak drop etmeksizin).
2. **Gecikme Süreleri (Latency):**
   * eSIM QR Üretim ve İndirme: p95 < 150 ms, p99 < 300 ms.
   * 5G Gerçek Zamanlı Kota Sorgusu (CHF): p95 < 20 ms, p99 < **45 ms**.
   * Abone Bakiye/Paket Sorgusu: p95 < 30 ms, p99 < 60 ms.
3. **Ölçeklenebilirlik (Autoscaling):** Kubernetes HPA (Horizontal Pod Autoscaler) CPU > %65 veya TPS artışında 30 saniye içinde otomatik pod replike edebilmelidir.
4. **Felaket Kurtarma (Disaster Recovery):**
   * İstanbul Kartal DC (Primary) ve Ankara Temelli DC (Secondary) arasında Active-Active senkron mimari.
   * RPO = **0 Veri Kaybı** (Zero Data Loss).
   * RTO < **15 Dakika** (Bir veri merkezinin tamamen çökmesi durumunda şebeke yükünün otomatik devralınması).

---

### 6. Teslimat Kilometre Taşları ve Proje Takvimi

```
+-----------------------------------------------------------------------+
| PROJE TAKVİMİ                                                         |
| [Faz 1: Altyapı & Tasarım]  --> 60 Gün                                |
| [Faz 2: Temel Entegrasyon]  --> 60 Gün                                |
| [Faz 3: UAT & Stres Testi]  --> 30 Gün                                |
| [Faz 4: Canlıya Geçiş & Go-Live] --> 30 Gün                           |
+-----------------------------------------------------------------------+
```

| Faz | Açıklama | Süre | Çıktı / Teslimat Kriteri |
| :--- | :--- | :--- | :--- |
| **Faz 1: Mimari & Altyapı** | K8s küme kurulumu, Istio Service Mesh, HSM & Vault entegrasyonu | 60 Gün | Mimari Tasarım Dokümanı (HLD/LLD) ve Kurulum Onayı |
| **Faz 2: Entegrasyon** | GSMA RSP, 5G CHF, HLR/HSS ve SMSC entegrasyonlarının tamamlanması | 60 Gün | Sandbox ortamında uçtan uca çağrı ve eSIM aktivasyonu |
| **Faz 3: Test & Doğrulama** | 30.000 TPS Yük ve Stres Testi, Güvenlik Pentest, DR Failover Testi | 30 Gün | Başarılı UAT Test Raporu ve Siber Güvenlik Temiz Belgesi |
| **Faz 4: Canlıya Geçiş** | Pilot 500.000 abonenin kademeli geçişi ve tüm trafiğin açılması | 30 Gün | Kesintisiz Canlıya Geçiş Tutanağı (Go-Live Signoff) |

---

### 7. Tarafların Teknik Sorumluları

* **TÜRK-TEL Proje Yöneticisi:** Selçuk ERDEM (Kıdemli Çekirdek Ağ Direktörü)
* **TELCOCLOUD Çözüm Mimarı:** Barış TÜRKOĞLU (Baş Yazılım Mimarı)
