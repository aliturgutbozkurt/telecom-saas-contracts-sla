# Bölüm 05: BTK, KVKK ve Loglarda Yapılan Büyük Hatalar
> *"Debug edemiyordum, ben de gelen tüm Request Body'sini `logger.info()` ile loglara bastım, ne olabilir ki?"*

Cevap verelim: Şirketinize **BTK tarafından 50 Milyon TL idari para cezası kesilebilir** ve sen de Kişisel Verileri Koruma Kanunu'nu (KVKK) ve Türk Ceza Kanunu m.136'yı (Haberleşme gizliliğini ihlal) ihlalden adli soruşturmayla karşılaşabilirsin.

---

### 1. Telekom Verisi Neden Sıradan Bir Veri Değildir?

Standart bir web uygulamasında kullanıcının adı ve e-postası PII (Kişisel Veri) kabul edilir. Telekomünikasyon dünyasında ise durum çok daha ciddidir:

1. **MSISDN (Telefon Numarası):** Kişinin dijital dünyadaki anahtarıdır.
2. **IMSI (International Mobile Subscriber Identity):** SIM kartın şebekedeki gizli kimliğidir. Ele geçirilirse SIM klonlanabilir.
3. **IMEI:** Cihazın kimliğidir.
4. **CDR / IPDR (Trafik Verileri):** Kim, kimi, ne zaman, kaç dakika aradı; hangi IP adresine bağlandı? (Anayasal Haberleşme Hürriyeti ve Gizliliği m.22).
5. **Cell-ID (Konum Verisi):** Kişinin anlık olarak hangi sokakta, hangi binanın yakınında olduğunu gösterir.

---

### 2. Acemi Yazılımcının Yaptığı Ölümcül Hatalar

#### Hata 1: Plaintext (Açık Metin) Loglama Yapmak
```java
// YANLIŞ: Konsola doğrudan abonenin telefonunu ve eSIM aktivasyon kodunu basmak
log.info("eSIM aktivasyon isteği geldi: msisdn={}, activationCode={}", msisdn, code);

// DOĞRU: Maskeleme (Masking) ve Tokenizasyon uygulamak
log.info("eSIM aktivasyon isteği geldi: msisdn={}, txnId={}", maskMsisdn(msisdn), txnId);
// Çıktı: eSIM aktivasyon isteği geldi: msisdn=+90 532 *** ** 89, txnId=tx-98214
```

#### Hata 2: Global SaaS İzleme Araçlarına Veri Göndermek (Veri Egemenliği İhlali)
Acemi bir yazılımcı projeye başlar başlamaz `npm install @sentry/react` veya harici Datadog SDK'sı kurup sunucu adresini Amerika veya Avrupa'daki buluta (`us-east-1` veya `eu-west-1`) yönlendirebilir.

* **BTK ve 5809 Sayılı Kanun Kuralı:** Türkiye'deki hiçbir telekom abonesinin trafik, arama veya kimlik verisi **yurt dışındaki sunuculara aktarılamaz!**
* **Çözüm:** Tüm loglama, hata takip ve APM araçları yerel veri merkezinde (Self-Hosted / On-Premise) barındırılmalıdır.

---

### 3. Altın Loglama Kuralları

1. **Şifre, PIN, PUK, Kredi Kartı Asla Loglanmaz:** Bu bilgilerin loglara düşmesi kesinlikle yasaktır.
2. **2 Yıl Değiştirilemezlik (WORM):** Yasal CDR logları en az 2 yıl boyunca silinemez ve değiştirilemez şekilde saklanır.
3. **Hata Mesajlarında Bilgi Sızdırma:** Kullanıcıya veya API istemcisine dönen hata mesajlarında stack trace, veritabanı tablo adları veya iç IP adresleri yer almamalıdır.
