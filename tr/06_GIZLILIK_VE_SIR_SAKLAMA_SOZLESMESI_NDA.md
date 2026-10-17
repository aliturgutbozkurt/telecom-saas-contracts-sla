# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Karşılıklı Gizlilik ve Sır Saklama Sözleşmesi (NDA)
**Doküman Kodu:** `TR-TELCO-NDA-2026-06`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-5  
**Gizlilik Derecesi:** ÇOK GİZLİ / ŞEBEKE GÜVENLİĞİ  
**Tarih:** 18 Ekim 2026  

---

### 1. Tanımlar ve Gizli Bilgi Kapsamı

İşbu Sözleşme kapsamında **"Gizli Bilgi"**; Tarafların birbirlerine doğrudan veya dolaylı olarak açıkladığı her türlü teknik, ticari, operasyonel ve hukuki bilgiyi ifade eder. Özellikle telekomünikasyon bağlamında aşağıdakiler mutlak surette Gizli Bilgi sayılır:

1. **Şebeke ve Altyapı Bilgileri:** OPERATÖR'ün çekirdek ağ topolojisi (Core Network Architecture), IP adres blokları, yönlendirme tabloları, baz istasyonu konum haritaları, HSM donanım modelleri ve kriptografik anahtar yönetim şeması.
2. **Abone ve Trafik Verileri:** Abone adetleri, aktif oturum sayıları, ARPU (abone başına ortalama gelir), churn (abone kaybı) oranları, kampanya ve tarife algoritmaları.
3. **Yazılım ve Kaynak Kodları:** TELCOCLOUD'a ait TelcoPulse platformunun kaynak kodları, veri modelleri, patent başvurusu aşamasındaki algoritmaları, derleme scriptleri ve dahili API dökümantasyonları.

---

### 2. İstisnalar

Aşağıdaki nitelikteki bilgiler Gizli Bilgi sayılmaz:
1. Açıklayan Tarafın yazılı izni ile kamuya açıklanmış bilgiler,
2. Alan Tarafın kusuru veya ihmali olmaksızın kamuya mal olmuş (public domain) bilgiler,
3. Mahkeme kararı veya BTK gibi yetkili resmi otoritelerin bağlayıcı idari talebiyle ifşa edilmesi zorunlu kılınan bilgiler (karşı Tarafa derhal yazılı bildirimde bulunmak şartıyla).

---

### 3. Bilgi Güvenliği Yükümlülükleri ve Koruma Standardı

1. **En Yüksek Özen Standardı:** Taraflar, karşı Tarafın Gizli Bilgilerini en az kendi en kritik ticari sırlarını korumak için gösterdikleri özen ve güvenlik tedbirleriyle (asgari ISO/IEC 27001 gereksinimleri) korumakla yükümlüdür.
2. **Bilmesi Gereken Prensibi (Need-to-Know):** Gizli Bilgiler yalnızca projenin ifası için bu bilgiye doğrudan ihtiyaç duyan, arka plan güvenlik soruşturması (background check) tamamlanmış ve yazılı gizlilik taahhütnamesi imzalamış yetkili personele açıklanabilir.
3. **Açık Kaynak ve Genel Platform Yasağı:** Projeye ait hiçbir kod parçası, konfigürasyon dosyası, şebeke parametresi veya hata çıktısı GitHub public repo, StackOverflow, ChatGPT/Claude gibi kamuya açık yapay zeka araçlarına veya üçüncü taraf forumlara yüklenemez.

---

### 4. Cezai Şart (Liquidated Damages) ve Hukuki Sorumluluk

1. **Sabit Cezai Şart:** Gizlilik yükümlülüklerinin ihlal edilmesi durumunda, ihlal eden Taraf, diğer Tarafın uğradığı fiili zararların tazmini hakkı saklı kalmak kaydıyla, her bir münferit ihlal için **500.000 USD (Beş Yüz Bin Amerikan Doları)** tutarında cezai şartı ilk yazılı talepte derhal ve defaten ödemeyi gayrikabili rücu kabul ve taahhüt eder.
2. **İhtiyati Tedbir:** Taraflar, gizlilik ihlalinin telafisi imkansız zararlar doğuracağını ve parasal tazminatın tek başına yeterli olmayacağını kabul ederek, mahkemelerden teminatsız derhal ihtiyati tedbir (injunction) talep etme hakkına sahiptir.

---

### 5. Süre ve Yürürlük

İşbu NDA, ana sözleşmenin yürürlük süresi boyunca ve ana sözleşmenin herhangi bir nedenle sona ermesinden itibaren **5 (beş) takvim yılı** boyunca yürürlükte kalır. Ancak şebeke topolojisi, şifreleme anahtarları ve telekomünikasyon altyapı güvenliğine ilişkin bilgiler için gizlilik süresi **süresizdir (zamanaşımına tabi değildir)**.
