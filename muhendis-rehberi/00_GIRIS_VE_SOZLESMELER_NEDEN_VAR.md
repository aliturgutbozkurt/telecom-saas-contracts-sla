# Bölüm 00: Kod Yazmak Yetmez mi? Şirketler Neden Yüz Sayfa Sözleşme İmzalar?
> *"Ben mühendisim, işim IDE açıp temiz kod (clean code) yazmak. Avukatların yazdığı sıkıcı PDF'ler beni niye ilgilendirsin ki?"*

Eğer kariyerinin başındaysan bu soruyu sorman çok doğal. Okulda, kurslarda veya bootcamplerde bize algoritmalar, veritabanı sorguları ve framework'ler öğretildi; ama hiçbir ders "Şirketinin imzaladığı sözleşmenin 7. maddesi yüzünden gece 03:00'te uykundan uyandırılacağını" söylemedi.

Gelin, acı bir gerçekle başlayalım: **Kurumsal dünyada kod, sözleşmenin bir uzantısıdır.**

---

### 1. Sözleşme Olmasaydı Ne Olurdu? (Gerçek Hayat Kabusu)

Diyelim ki bir telekom şirketi ("TÜRK-TEL") için harika bir eSIM aktivasyon servisi yazdın. Kodun tertemiz, test coverage %90.

* **Senaryo A:** Cuma akşamı saat 18:00'de prod ortamında bir sorun çıktı. Sistem çöktü. Sen hafta sonu tatile gittin, telefonunu kapattın. Müşteri (Telekom) pazartesi günü şirketinize geldi: *"Sizin yüzünüzden hafta sonu 50.000 kişi yeni telefonuna hat takamadı, 2 milyon TL kaybettik, zararımızı siz ödeyeceksiniz!"* dedi.
  * **Sözleşme varsa:** SLA dokümanına bakılır. MTTA (ilk yanıt) ve MTTR (çözüm süresi) kuralları bellidir. Şirketin ödeyeceği cezanın üst sınırı (Liability Cap) bellidir.
  * **Sözleşme yoksa:** Şirketiniz mahkemelik olur, tüm banka hesapları bloke edilebilir, şirket batar ve sen maaşını alamazsın.

* **Senaryo B:** Müşterinin proje yöneticisi her sabah sana gelip *"Ya şuraya bir de anlık hava durumu butonu ekleyelim, bir de aboneler birbirine puan göndersin"* diyor. Sen de "iyi niyetli" bir junior olarak her denileni yapıyorsun. 6 ay sonra proje teslim tarihi geliyor; ama temel faturalama modülü hala bitmemiş!
  * **Sözleşme varsa:** SOW (Teknik Şartname) açılır: *"Bizim kapsamımızda bunlar yok, yeni talep istiyorsanız Değişiklik Talebi (CR) açıp parasını ödemelisiniz"* denir.

---

### 2. Sözleşmeler Aslında "Yazılım Mimarisi"nin Bir Parçasıdır

Bir binayı düşün:
* **Statik Hesaplar & İmar Kanunu:** Hukuki Sözleşmeler (MSA, SLA, SOW).
* **Kolonlar ve Kirişler:** Yazılım Mimarisi (Kubernetes, Kafka, Veritabanları).
* **Duvar Boyası ve Mobilya:** Frontend ve Kullanıcı Arayüzü.

İmar izni olmadan gökdelen dikemeyeceğin gibi, sözleşmedeki şartları bilmeden yazacağın mimari de ilk canlı yük testinde çökmeye mahkumdur.

---

### 3. Acemi Yazılımcının Bilmesi Gereken 3 Temel Gerçek

1. **Her Satır Kodun Hukuki Bir Maliyeti Vardır:**
   Yazdığın kod bir veritabanı sorgusunda 50 milisaniye yerine 2 saniye beklerse, sadece sunucu yavaşlamaz; şirketin telekom operatörüne **"gecikme cezası" (Service Credit)** ödemesine neden olabilir.

2. **Müşteriye Verilen Sözler Sözleşmeye Dayanır:**
   Müşteriye Slack'ten veya toplantıda *"Merak etmeyin, o özelliği yarın akşama hallederim"* demek, kurumsal hukukta şirketi bağlayıcı bir taahhüt yaratabilir. Kendi başına kapsam genişletme!

3. **Sözleşmeler Yazılımcıyı da Korur:**
   Sözleşme sadece müşteriyi değil, seni de korur. Müşteri senden pazar gecesi saat 04:00'te keyfi bir rapor istediğinde, sözleşmeyi gösterip *"Destek saatlerimiz ve SLA matrisimiz gereği bu talep P4 seviyesindedir ve mesai saatlerinde yanıtlanacaktır"* diyebilirsin.

---

### Özet: Bu Rehberde Ne Yapacağız?
Bu rehber boyunca kurumsal bir telekom projesinde (`TelcoPulse`) kullanılan 10 temel sözleşmeyi, teknik bir mühendisin gözünden, satır satır kod mantığıyla ele alacağız. Bir sonraki bölümde ilk ve en büyük sözleşmeyle başlıyoruz: **MSA (Ana Hizmet Sözleşmesi)**.
