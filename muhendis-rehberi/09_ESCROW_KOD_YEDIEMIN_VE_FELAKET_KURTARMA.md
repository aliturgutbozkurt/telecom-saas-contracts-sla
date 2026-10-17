# Bölüm 09: Escrow (Kod Yediemini) ve Felaket Kurtarma
> *"Biz gece gündüz bu kod için ter döktük, tescilli algoritmamızı neden TÜBİTAK'a veya üçüncü bir emanetçi şirkete teslim ediyoruz?"*

İlk duyduğunda bir yazılımcıya garip gelebilir: Şirketinin en değerli varlığı olan kaynak kodları alıp bağımsız bir kuruma emanet ediyorsunuz. Peki neden?

---

### 1. Telekom Operatörünün En Büyük Korkusu

Kendini 50 Milyon abonesi olan bir telekom devinin (TÜRK-TEL) Genel Müdürünün yerine koy:
* Bütün 5G şebekeni ve eSIM aktivasyonlarını TelcoCloud adlı bir yazılım şirketine bağlamışsın.
* Bir sabah uyandın: Yazılım şirketinin kurucuları kavga etmiş, şirket iflas bayrağını çekmiş veya kapısına kilit vurmuş!
* Sistemde bir arıza çıktı, arayacak tek bir mühendis bile yok!
* Ne yapacaksın? 50 Milyon insanın telefonunun susmasını ve şirketin batmasını mı izleyeceksin?

İşte bu kabusu önlemek için dünya çapında **Yazılım Yediemini (Source Code Escrow)** mekanizması kullanılır.

---

### 2. Escrow Nasıl Çalışır?

```
+-----------------------------------------------------------------------------------+
| 1. TELCOCLOUD (Yazılım Şirketi)                                                    |
|    Her 3 ayda bir kaynak kodları, Dockerfile'ları ve derleme scriptlerini         |
|    şifreleyerek emanetçiye teslim eder.                                           |
|                                     │                                             |
|                                     ▼                                             |
| 2. YEDİEMİN (Escrow Agent - Örn: TÜBİTAK BİLGEM)                                  |
|    Kodları bağımsız yüksek güvenlikli kasada saklar. Kimseye göstermez.           |
|                                     │                                             |
|         ┌───────────────────────────┴───────────────────────────┐                 |
|         ▼ (Normal Durumda)                                      ▼ (İflas Halinde) |
|    Kasa kapalı kalır.                                     Kasa açılır ve kodlar   |
|    Müşteri kodlara dokunamaz.                             operatöre teslim edilir.|
+-----------------------------------------------------------------------------------+
```

---

### 3. Emanet Hangi Durumlarda Açılır (Release Conditions)?

Yediemin kasası keyfi olarak açılamaz. Yalnızca mahkeme veya noter huzurunda şu 3 şarttan biri kanıtlanırsa açılır:
1. **İflas ve Tasfiye:** Yazılım şirketinin resmen iflas etmesi.
2. **Desteği Terk Etme (Abandonment):** Sistemin çökmesi ve yazılım şirketinin 10 iş günü boyunca telefonlara çıkmaması, hiçbir müdahalede bulunmaması.
3. **Kritik İhlal:** Kanuni zorunlu güvenlik güncellemelerinin yapılmasının reddedilmesi.

---

### 4. Yazılım Mühendisi Olarak Senin Görevin Nedir?

Escrow süreci genellikle kıdemli bir mühendisin üzerine kalır:
* **"Clean Slate Build" (Sıfırdan Derlenebilirlik):** Emanete bırakılan kodlar test edilir. Bağımsız denetçi boş bir sanal makine açar, senin bıraktığın dökümanı okur ve `make build` veya `docker build` komutunu çalıştırır.
* **Eğer harici bir kütüphane eksikse veya dokümantasyon yanlış olduğu için kod derlenemezse Escrow onaylanmaz!**
* Bu yüzden projende kullandığın her bağımlılığı `go.mod`, `pom.xml` veya `package-lock.json` ile dondurmalı ve çevrimdışı (offline) derleme paketlerini hazırlamalısın.
