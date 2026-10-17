# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Kaynak Kod Yediemin ve İş Sürekliliği Sözleşmesi (Source Code Escrow)
**Doküman Kodu:** `TR-TELCO-ESC-2026-09`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-8  
**Sürüm:** `v1.0.0-LEGAL`  
**Tarih:** 18 Ekim 2026  

---

### 1. Amaç ve Ulusal Altyapı Güvencesi

Telekomünikasyon şebekesi kritik ulusal altyapı statüsündedir. YAZILIM SAĞLAYICI'nın iflas etmesi, ticari faaliyetini durdurması veya platform desteğini terk etmesi durumunda, TÜRK-TEL'in haberleşme hizmetini kesintisiz sürdürebilmesi amacıyla kaynak kodlar tarafsız bir **Yediemin Kuruluş (Escrow Agent)** nezdinde koruma altına alınmıştır.

---

### 2. Taraflar ve Yediemin Seçimi

* **Lisans Veren:** TelcoCloud Yeni Nesil Ağ ve Yazılım Teknolojileri A.Ş.
* **Lehtar (Lisans Sahibi):** TürkTel Global İletişim ve Mobil Hizmetler A.Ş.
* **Yediemin Kuruluş (Escrow Agent):** **TÜBİTAK BİLGEM / Uluslararası Yazılım Denetim ve Güven Saklama Merkezi**

---

### 3. Emanet Kapsamındaki Varlıklar (Deposit Materials)

YAZILIM SAĞLAYICI, her çeyrek dönemde ve her yeni minör/majör sürüm yayınlandığında en geç 7 (yedi) iş günü içinde aşağıdaki varlıkları şifreli olarak Yediemin'e teslim etmek zorundadır:

1. **Tam Kaynak Kodlar:** Tüm mikroservislerin (RSP, CHF, BSS Core, Fraud, Audit) okunabilir kaynak kodları ve git commit geçmişi.
2. **Dağıtım ve Altyapı Kodları (IaC):** Kubernetes Helm chart'ları, ArgoCD konfigürasyonları, Dockerfile tanımları, Terraform altyapı otomasyon scriptleri.
3. **Veritabanı Şemaları:** PostgreSQL ve ClickHouse veri tabloları, DDL scriptleri ve veri göçü (migration) araçları.
4. **Bağımlılık Arşivi:** Derleme için gerekli harici kütüphanelerin çevrimdışı arşivleri (offline vendor cache).
5. **Derleme Kılavuzu:** Sistemi sıfırdan derleyip çalışır hale getirmek için gerekli adım adım teknik dökümantasyon (Build & Run Manual).

---

### 4. Emanet Açılma Koşulları (Release Conditions)

Yediemin Kuruluş, yalnızca aşağıdaki koşullardan birinin gerçekleşmesi ve OPERATÖR tarafından noter kanalıyla tevsik edilmesi halinde emaneti OPERATÖR'e teslim eder:

1. **İflas ve Tasfiye:** YAZILIM SAĞLAYICI'nın iflasına karar verilmesi, konkordato ilan etmesi veya tasfiye sürecine girmesi.
2. **Hizmetin Terk Edilmesi (Abandonment):** YAZILIM SAĞLAYICI'nın sözleşme kapsamındaki 7/24 bakım ve SLA desteğini fiilen durdurması ve yazılı ihtara rağmen 10 iş günü içinde desteği yeniden başlatmaması.
3. **Ağır Sözleşme İhlali:** YAZILIM SAĞLAYICI'nın taahhüt ettiği kritik güvenlik yamalarını veya BTK zorunlu mevzuat güncellemelerini yapmaktan imtina etmesi.

---

### 5. Emanet Açıldığında OPERATÖR'ün Hakları

Kaynak kodların OPERATÖR'e teslim edilmesi durumunda:
1. OPERATÖR, TelcoPulse platformunu kendi şebekesinde kesintisiz çalıştırmak, değiştirmek, yeni özellikler eklemek ve derlemek üzere dünya çapında, daimi, telifsiz (royalty-free) bir kullanım hakkı kazanır.
2. OPERATÖR, kaynak kodları üçüncü taraflara satamaz, ticari olarak pazarlayamaz veya açık kaynak olarak yayınlayamaz; kodlar yalnızca OPERATÖR'ün kendi iç şebeke operasyonu için kullanılabilir.
