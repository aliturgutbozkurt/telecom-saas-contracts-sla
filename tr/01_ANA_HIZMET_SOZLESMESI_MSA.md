# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Ana Hizmet Sözleşmesi (Master Services Agreement - MSA)
**Sözleşme Kodu:** `TR-TELCO-MSA-2026-01`  
**İmza Tarihi:** 18 Ekim 2026  
**Yürürlük Tarihi:** 01 Kasım 2026  

---

### Madde 1: Taraflar

İşbu Ana Hizmet Sözleşmesi ("Sözleşme"), aşağıda unvanları ve tebligat adresleri belirtilen taraflar arasında akdedilmiştir:

1. **OPERATÖR:**  
   **TürkTel Global İletişim ve Mobil Hizmetler A.Ş.**  
   Maslak Mah. Büyükdere Cad. No: 245 Maslak Telekom Plaza, Sarıyer / İstanbul  
   Ticaret Sicil No: 384920 | Vergi No: Boğaziçi VD 8920192841  
   *(Metin içerisinde **"OPERATÖR"** veya **"TÜRK-TEL"** olarak anılacaktır.)*  

2. **YAZILIM SAĞLAYICI:**  
   **TelcoCloud Yeni Nesil Ağ ve Yazılım Teknolojileri A.Ş.**  
   ODTÜ Teknokent Bilişim İnovasyon Merkezi Kat: 4 No: 402, Çankaya / Ankara  
   Ticaret Sicil No: 194821 | Vergi No: Doğanbey VD 7291048201  
   *(Metin içerisinde **"YAZILIM SAĞLAYICI"** veya **"TELCOCLOUD"** olarak anılacaktır.)*  

OPERATÖR ve YAZILIM SAĞLAYICI münferiden **"Taraf"**, müştereken **"Taraflar"** olarak anılacaktır.

---

### Madde 2: Tanımlar ve Kısaltmalar

* **BSS (Business Support Systems):** Telekomünikasyon abonelik yönetimi, paket ve tarife yapılandırması, sipariş orkestrasyonu ve faturalama operasyonlarını yürüten iş yazılım katmanı.
* **CHF / CCS (Charging Function / Convergent Charging System):** 3GPP standartlarına uygun, 5G ve 4G şebekelerinde saniyeler mertebesinde veri, ses ve SMS kullanımını denetleyen ve anlık bakiye düşen gerçek zamanlı ücretlendirme motoru.
* **eSIM / RSP (Remote SIM Provisioning):** GSMA standartlarına uygun olarak fiziksel SIM kart gerektirmeksizin dijital profilin (eUICC) uzaktan güvenli indirilmesi ve aktifleştirilmesi süreci.
* **BTK:** Bilgi Teknolojileri ve İletişim Kurumu.
* **SaaS (Software-as-a-Service):** Mülkiyeti YAZILIM SAĞLAYICI'ya ait olan, OPERATÖR'ün tahsisli özel altyapısı üzerinde bulut-yerel olarak çalıştırılan ve abonelik modeliyle erişilen yazılım hizmeti.
* **Kullanılabilirlik (Uptime):** Sistemin planlı bakımlar haricinde, aboneye ve şebekeye kesintisiz cevap verebilir durumda olduğu sürenin toplam süreye yüzdesel oranı.

---

### Madde 3: Sözleşmenin Konusu ve Kapsamı

İşbu Sözleşme; YAZILIM SAĞLAYICI tarafından geliştirilen **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** platformunun, OPERATÖR'ün çekirdek ağ altyapısına (Core Network) entegrasyonunu, lisanslanmasını, barındırılmasını, 7/24 bakım-destek ve SLA taahhütleri çerçevesinde işletilmesini düzenler. İşbu Sözleşme ekleri (SOW, SLA, DPA, NDA, Escrow) ile ayrılmaz bir bütündür.

---

### Madde 4: Tarafların Hak ve Yükümlülükleri

#### 4.1. YAZILIM SAĞLAYICI'nın Yükümlülükleri:
1. **Servis Sürekliliği:** Platformu işbu sözleşmenin eki olan [SLA Dokümanı](file:///Users/aliturgutbozkurt/Desktop/telecom/tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO_SLI.md)'nda taahhüt edilen yıllık %99.999 çekirdek servis ve %99.99 genel sistem kullanılabilirlik oranlarına uygun olarak çalıştırmakla yükümlüdür.
2. **Kapasite ve Performans:** Sistem yoğun saatlerde (Busy Hour) dahi asgari **25.000 TPS** throughput ve p99 gecikme süresinin 45 milisaniyenin altında kalmasını temin edecektir.
3. **Mevzuata Uyum:** 5809 Sayılı Elektronik Haberleşme Kanunu, BTK kararları ve KVKK kurallarına harfiyen riayet etmek, verilerin Türkiye sınırları dışındaki hiçbir sunucu veya üçüncü taraf servise çıkmamasını garanti etmek zorundadır.
4. **Güvenlik Yamaları:** Kritik (Critical/CVSS 9.0+) güvenlik açıklarını tespit veya bildirimden itibaren azami 24 saat içinde geçici önlemle, 72 saat içinde kalıcı yamayla kapatacaktır.

#### 4.2. OPERATÖR'ün Yükümlülükleri:
1. **Ağ Erişimi:** YAZILIM SAĞLAYICI'ya gerekli entegrasyon testleri ve operasyonel müdahaleler için güvenli (IPsec VPN / mTLS çift taraflı sertifikalı) ağ erişimi sağlamak.
2. **Ödeme:** Sözleşmede kararlaştırılan kurulum, entegrasyon ve aylık SaaS lisans bedellerini zamanında ifa etmek.
3. **Kabul ve Onay:** SOW kapsamında teslim edilen fazları en geç 15 (on beş) iş günü içerisinde test ederek UAT onayını vermek veya gerekçeli ret bildiriminde bulunmak.

---

### Madde 5: Fikri ve Sınai Mülkiyet Hakları (IPR)

1. **Platform Mülkiyeti:** TelcoPulse platformunun kaynak kodları, mimarisi, tescilli algoritmaları, patentleri ve ticari markaları münhasıran YAZILIM SAĞLAYICI'ya aittir. OPERATÖR'e yalnızca sözleşme süresince geçerli, devredilemez, münhasır olmayan bir kurumsal kullanım lisansı verilir.
2. **Operatör ve Abone Verileri:** Sisteme yüklenen, üretilen, işlenen tüm telekomünikasyon trafik verileri (CDR), abone kimlik bilgileri, şebeke metrikleri ve finansal raporlar istisnasız ve münhasıran OPERATÖR'e aittir. YAZILIM SAĞLAYICI bu veriler üzerinde hiçbir fikri hak, rehin veya alıkoyma (hapis) hakkı iddia edemez.
3. **Özelleştirmeler:** OPERATÖR'ün talebi üzerine ve bedeli OPERATÖR tarafından ödenerek geliştirilen OPERATÖR'e özel arayüzler ve operatör-spesifik API entegrasyon katmanlarının fikri hakları OPERATÖR'e aittir.

---

### Madde 6: Ücretlendirme, Faturalama ve Ödeme Şartları

1. **Kurulum ve Entegrasyon Bedeli:** SOW Faz 1 tamamlandığında ve ilk canlı çağrı/eSIM testi başarıldığında faturalanacak tek seferlik 1.250.000 USD (veya TCMB döviz satış kuru karşılığı Türk Lirası) bedeldir.
2. **Aylık SaaS ve SLA Bedeli:** Canlıya geçişten itibaren her ay başında fatura edilecek aylık 185.000 USD sabit lisans bedeline ilaveten, 20 milyon aktif abonenin üzerindeki her 1 milyon ek abone için 4.500 USD hacim bedeli tahakkuk ettirilir.
3. **Ödeme Vadesi:** Faturalar OPERATÖR'e tebliğinden itibaren 30 (otuz) takvim günü içinde banka havalesiyle ödenir.
4. **SLA Ceza Mahsubu:** SLA ihlali nedeniyle oluşan hizmet kredileri (Service Credit), takip eden ayın faturasından doğrudan mahsup edilir.

---

### Madde 7: Sorumluluğun Sınırlandırılması ve Tazminat (Liability & Indemnity)

1. **Sorumluluk Tavanı (Liability Cap):** Tarafların işbu sözleşmeden doğan doğrudan zararlara ilişkin toplam mali sorumluluğu, olayın vuku bulduğu tarihten önceki son 12 (on iki) ayda OPERATÖR tarafından YAZILIM SAĞLAYICI'ya fiilen ödenmiş olan toplam tutarı aşamaz.
2. **Tavan Sınırlamasının İstisnaları:** Aşağıdaki durumlar sorumluluk tavanına (Cap) tabi değildir:
   * Tarafların kasıt veya ağır kusuru (gross negligence),
   * Gizlilik ve ticari sırların (NDA) ihlali,
   * Fikri mülkiyet haklarının ihlali ve üçüncü taraf patent/telif davaları,
   * KVKK ve BTK regülasyonlarının ihlalinden kaynaklanan doğrudan idari para cezaları.
3. **Fikri Mülkiyet Tazminatı:** YAZILIM SAĞLAYICI, platformun üçüncü tarafların patent, telif veya ticari sırlarını ihlal ettiği iddiasıyla OPERATÖR aleyhine açılacak tüm davalardan OPERATÖR'ü beri kılacak; savunma masrafları ile hükmedilecek kesinleşmiş tazminatları OPERATÖR'e derhal rücu etmeksizin ödeyecektir.

---

### Madde 8: Sözleşmenin Süresi ve Fesih

1. **Süre:** İşbu Sözleşme imza tarihinde yürürlüğe girer ve canlıya geçiş tarihinden itibaren 36 (otuz altı) ay boyunca yürürlükte kalır. Süre bitiminden 60 gün önce yazılı fesih ihbarı yapılmadığı takdirde birer yıllık dönemlerle kendiliğinden uzar.
2. **Haklı Nedenle Derhal Fesih:** Taraflardan birinin sözleşme yükümlülüklerini ağır şekilde ihlal etmesi ve yapılan yazılı ihtara rağmen 15 (on beş) takvim günü içinde ihlali gidermemesi durumunda, diğer Taraf sözleşmeyi derhal ve tazminatsız feshedebilir.
3. **Kritik SLA İhlali Nedeniyle Fesih:** Bir takvim yılı içerisinde ardışık 3 ay veya toplamda 4 ay boyunca taahhüt edilen çekirdek SLA oranının (%99.99) altına düşülmesi halinde OPERATÖR sözleşmeyi tazminatsız fesih hakkına sahiptir.
4. **Verilerin İadesi ve Geçiş Desteği (Exit Management):** Sözleşmenin herhangi bir nedenle sona ermesi durumunda, YAZILIM SAĞLAYICI OPERATÖR'e ait tüm verileri açık formatlarda (JSON, Parquet, PostgreSQL Dump) 30 gün içinde eksiksiz teslim etmek ve yeni tedarikçiye geçiş sürecinde 90 gün boyunca makul ücreti mukabilinde teknik danışmanlık sağlamak zorundadır.

---

### Madde 9: Uygulanacak Hukuk ve Uyuşmazlıkların Çözümü

1. İşbu Sözleşme Türkiye Cumhuriyeti Kanunlarına tabidir.
2. Sözleşmeden doğacak her türlü uyuşmazlığın çözümünde öncelikle Tarafların üst düzey yöneticileri (CTO / Genel Müdür Yardımcısı) arasında 15 günlük iyi niyet müzakeresi yürütülür.
3. Müzakere ile çözülemeyen uyuşmazlıklarda **İstanbul Tahkim Merkezi (ISTAC)** Tahkim Kuralları uygulanır. Tahkim yeri İstanbul, tahkim dili Türkçe olacaktır. Alternatif olarak adli yargı yoluna başvurulması halinde **İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri** münhasıran yetkilidir.

---

### Madde 10: Yürürlük ve İmzalar

10 (on) maddeden ve eklerinden ibaret işbu Sözleşme, Tarafların yetkili temsilcileri tarafından 2 (iki) nüsha olarak tanzim edilmiş ve imza altına alınmıştır.

| TÜRK-TEL GLOBAL İLETİŞİM A.Ş. (OPERATÖR) | TELCOCLOUD YENİ NESİL AĞ VE YAZILIM TEKNOLOJİLERİ A.Ş. |
| :--- | :--- |
| **İmza:** __________________________ | **İmza:** __________________________ |
| **Ad Soyad:** Dr. Mehmet Akif ERSOY | **Ad Soyad:** Kerem Selim ÖZTÜRK |
| **Unvan:** Şebeke ve Bilgi Teknolojileri GMY (CTO) | **Unvan:** Kurucu Ortak & Genel Müdür (CEO) |
| **Tarih:** 18 Ekim 2026 | **Tarih:** 18 Ekim 2026 |
