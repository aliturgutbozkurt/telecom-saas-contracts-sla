# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Veri İşleme ve Regülasyon Uyum Sözleşmesi (DPA - BTK & KVKK)
**Doküman Kodu:** `TR-TELCO-DPA-2026-05`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-4  
**Yasal Dayanak:** 5809 Sayılı Elektronik Haberleşme Kanunu & 6698 Sayılı KVKK  
**Tarih:** 18 Ekim 2026  

---

### 1. Tarafların Rolleri ve Hukuki Nitelikleri

1. **OPERATÖR (Veri Sorumlusu):** Abonelerin kişisel verilerini, haberleşme trafik bilgilerini ve konum verilerini toplamaya, işlemeye ve bu amaçları belirlemeye yetkili lisanslı işletmecidir.
2. **YAZILIM SAĞLAYICI (Veri İşleyen):** OPERATÖR'ün açık yazılı talimatları doğrultusunda ve yalnızca SaaS platformunun teknik işletimi amacıyla verileri işleyen teknoloji sağlayıcısıdır.

---

### 2. İşlenen Veri Kategorileri ve Telekomünikasyon Nitelikleri

Platform aracılığıyla işlenen veriler en yüksek gizlilik ve güvenlik sınıfında kabul edilir:

| Veri Kategorisi | Örnek Veri Tipleri | Gizlilik Seviyesi | Yasal Saklama Zorunluluğu |
| :--- | :--- | :--- | :--- |
| **Abone Kimlik Verileri** | T.C. Kimlik No, Ad Soyad, Anne Kızlık Soyadı, Doğum Tarihi | Kritik PII / KVKK | Abonelik süresince + 10 Yıl |
| **Şebeke Kimlikleri** | MSISDN (Telefon No), IMSI (SIM Kimliği), IMEI (Cihaz Kimliği) | Telekom Şebeke Sırrı | Şebeke ömrü boyunca |
| **Trafik Verileri (CDR/IPDR)**| Arayan/Aranan No, Arama Saati, Süresi, Veri Oturum Hacmi (MB), IP Adresleri | Haberleşme Gizliliği (Anayasa m.22) | 5809 Sayılı K. gereği Asgari 2 Yıl |
| **Konum & Baz İstasyonu** | Cell-ID, Sektör Kodu, GPS Koordinatları, Baz İstasyonu Lokasyonu | Yüksek Hassasiyetli Konum Verisi | Yasal izinler harici süresiz anonimleştirme |

---

### 3. Veri Egemenliği ve Sınır Ötesi Aktarım Yasağı (Data Sovereignty)

1. **Mutlak Yerellik İlkesi:** 5809 Sayılı Elektronik Haberleşme Kanunu ve BTK ikincil mevzuatı uyarınca; Türkiye Cumhuriyeti sınırları içindeki telekomünikasyon şebekesine ait hiçbir trafik verisi, arama detayı, abone profili veya log kaydı **yurt dışına aktarılamaz, yurt dışındaki bulut servislerinde (AWS, Azure, GCP global bölgeleri vb.) depolanamaz veya replike edilemez**.
2. **Teknik Garanti:** YAZILIM SAĞLAYICI, sistemin tüm sunucu, yedekleme ve analiz kümesinin Türkiye sınırları içindeki veri merkezlerinde (TÜRK-TEL On-Premise veya BTK onaylı yerli Cloud) çalışacağını garanti eder.
3. **Telemetri ve Log Ayrıştırma:** Sistem hatalarını veya yazılım çökmelerini analiz eden telemetri araçları (Sentry, Datadog vb.) dahi yurt dışı SaaS servislerine abone veya IP verisi gönderemez; tüm log toplama yerel altyapıda (self-hosted) çalıştırılacaktır.

---

### 4. Teknik ve İdari Güvenlik Tedbirleri

YAZILIM SAĞLAYICI aşağıdaki güvenlik kontrollerini eksiksiz uygulamayı taahhüt eder:

1. **Şifreleme (Encryption):**
   * **Transit:** Tüm harici ve dahili API çağrılarında TLS 1.3 ve karşılıklı sertifika doğrulamalı mTLS.
   * **At-Rest:** Tüm veritabanı tabloları, yedekler ve disk birimleri FIPS 140-2 Seviye 3 onaylı donanımsal HSM kontrolündeki AES-256 anahtarlarıyla şifrelenir.
2. **Dinamik Maskeleme ve Pseudonymization:**
   * Operatör müşteri temsilcisi veya destek mühendisi ekranlarında MSISDN, IMSI ve kimlik numaraları dinamik olarak maskelenir (`+90 532 *** ** 12`).
   * Veritabanı yöneticileri dahi şifrelenmemiş salt metin (plaintext) trafik verisine doğrudan erişemez.
3. **Loglama Kuralları ve Geliştirici Kısıtlamaları:**
   * Uygulama konsol ve uygulama loglarına (`stdout`, debug log vb.) şifrelenmemiş PII, PIN, PUK, eSIM aktivasyon kodu veya kredi kartı verisi yazılması kesinlikle yasaktır.
   * CI/CD boru hattına entegre statik kod analizi (SAST) ile kodda PII sızıntısı taraması zorunludur.

---

### 5. Veri İhlali Bildirim Protokolü (Data Breach Management)

1. **24 Saat Kuralı:** YAZILIM SAĞLAYICI, herhangi bir yetkisiz erişim, veri sızıntısı, siber saldırı veya güvenlik açığı şüphesini öğrendiği andan itibaren en geç **24 (yirmi dört) saat içinde** OPERATÖR Bilgi Güvenliği Direktörlüğü'ne ve SOME birimine yazılı bildirim yapmak zorundadır.
2. **72 Saat Yasal Bildirimi:** OPERATÖR'ün KVKK ve BTK'ya 72 saat içinde yapması gereken yasal bildirim için YAZILIM SAĞLAYICI tüm teknik analiz, etkilenen abone sayısı ve log detaylarını 36 saat içinde OPERATÖR'e teslim eder.
3. **İdari Para Cezaları ve Rücu:** YAZILIM SAĞLAYICI'nın ihmali, kusuru veya taahhütlerine aykırılığı nedeniyle BTK veya KVKK Kurulu tarafından OPERATÖR'e kesilecek tüm idari para cezaları ile üçüncü şahıslara ödenecek tazminatlar doğrudan YAZILIM SAĞLAYICI'ya rücu edilir.

---

### 6. Denetim Hakkı

OPERATÖR ve BTK müfettişleri, önceden 3 (üç) iş günü önceden haber vermek kaydıyla (acil güvenlik ihlallerinde derhal), YAZILIM SAĞLAYICI'nın geliştirdiği yazılım mimarisini, veri işleme süreçlerini ve güvenlik önlemlerini yerinde veya bağımsız bağımsız denetçiler eliyle denetleme hakkına sahiptir.
