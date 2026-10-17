# TelcoPulse Omni-BSS & eSIM Cloud Suite
## SaaS Abonelik ve Lisans Sözleşmesi
**Doküman Kodu:** `TR-TELCO-LIC-2026-04`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-3  
**Sürüm:** `v1.0.0-COMMERCIAL`  
**Tarih:** 18 Ekim 2026  

---

### 1. Lisansın Niteliği ve Kapsamı

1. **Lisans Modeli:** YAZILIM SAĞLAYICI, OPERATÖR'e TelcoPulse platformunu kullanmak üzere dünya çapında, münhasır olmayan (non-exclusive), devredilemez (non-transferable), alt lisans verilemez (non-sublicensable) kurumsal SaaS abonelik hakkı tanır.
2. **Tahsisli Dağıtım Modeli (Dedicated Private Cloud Deployment):** Telekomünikasyon sektörünün regülatif ve güvenlik gereksinimleri sebebiyle, yazılım kamuya açık çok kiracılı (public multi-tenant) altyapıda **çalıştırılamaz**. Platform, münhasıran OPERATÖR için ayrılmış donanım veya OPERATÖR'ün onayladığı yerli ve bağımsız sanal veri merkezi altyapısında (Dedicated VPC / Private Kubernetes Cluster) izole olarak barındırılır.

---

### 2. Kapasite Metrikleri ve Ücretlendirme Kademeleri

Abonelik lisansı, aktif abone sayısı ve anlık işlem hacmi (TPS) metriklerine dayalı olarak aşağıdaki baremler çerçevesinde faturalandırılır:

| Abone Kademesi | Aylık Baz Lisans Bedeli | Dahil Olan Peak TPS | Dahil Olan Aylık CDR Hacmi |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Temel): 0 - 20 Milyon Abone** | **185.000 USD / Ay** | **25.000 TPS** | **3.5 Milyar Kayıt** |
| **Tier 2 (Genişleme): 20 - 35 Milyon Abone** | **245.000 USD / Ay** | **35.000 TPS** | **6.0 Milyar Kayıt** |
| **Tier 3 (Maksimum): 35 - 50+ Milyon Abone**| **295.000 USD / Ay** | **50.000 TPS** | **10.0 Milyar Kayıt** |

*Ek Kapasite:* Kota aşımlarında, her ilave 1.000 TPS için aylık 3.000 USD ek kapasite bedeli uygulanır.

---

### 3. Hizmet Güncellemeleri ve Sürüm Politikası (Lifecycle & Deprecation)

1. **Sürekli İyileştirme:** YAZILIM SAĞLAYICI, platformun güvenlik yamalarını, performans optimizasyonlarını ve minör sürüm güncellemelerini ek bir lisans ücreti talep etmeksizin sağlamakla yükümlüdür.
2. **N-1 Sürüm Desteği:** YAZILIM SAĞLAYICI, canlıda çalışan mevcut sürümün yanı sıra en az bir önceki majör sürümü (N-1) 18 ay boyunca tam desteklemek zorundadır.
3. **Mevzuat Güncellemeleri:** BTK veya GSMA standartlarında yapılan ve telekom operatörleri için zorunlu kılınan regülatif güncellemeler, YAZILIM SAĞLAYICI tarafından mevzuatın yürürlüğe giriş tarihinden en az 30 gün önce sisteme entegre edilir.

---

### 4. Hizmetin Sona Ermesi ve Çıkış Yönetimi (Exit Management)

1. **Kilitlenme Yasağı (No Vendor Lock-In):** OPERATÖR verileri standart dışı tescilli (proprietary) formatlara kilitlenemez.
2. **Veri İhracı:** Fesih veya süre bitiminde YAZILIM SAĞLAYICI, tüm abone profillerini, geçmiş CDR ve fatura kayıtlarını, sistem yapılandırmalarını endüstri standardı formatlarda (PostgreSQL dump, Apache Parquet, JSON) OPERATÖR'e güvenli SFTP/S3 üzerinden teslim eder.
3. **Güvenli İmha:** Verilerin OPERATÖR'e eksiksiz devredildiğinin yazılı teyidinden itibaren 30 takvim günü içinde YAZILIM SAĞLAYICI'nın tüm geçici ve önbellek ortamlarındaki veriler NIST SP 800-88 standartlarına uygun olarak kalıcı şekilde silinir ve "Veri İmha Tutanağı" tanzim edilir.
