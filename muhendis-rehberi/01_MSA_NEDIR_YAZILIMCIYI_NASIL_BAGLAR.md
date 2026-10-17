# Bölüm 01: MSA Nedir? Yazılımcıyı Nasıl Bağlar?
> **MSA (Master Services Agreement - Ana Hizmet Sözleşmesi)**, iki şirketin evlilik cüzdanı gibidir. Bütün diğer teknik sözleşmeler (SLA, SOW, DPA) bu çatı sözleşmenin çocuklarıdır.

---

### 1. MSA Bir Yazılımcının Dilinde Ne İfade Eder?

Şirketiniz (TELCOCLOUD) ile dev bir operatör (TÜRK-TEL) masaya oturduğunda ilk imzalanan belge MSA'dir. Bu belgede kodun hangi framework'le yazılacağı yazmaz; ama şunlar yazar:
* Eğer sistem çökerse en fazla ne kadar tazminat öderiz?
* Yazdığımız kodların sahibi kim?
* Müşteri parasını ödemezse fişi çekebilir miyiz?

---

### 2. Yazılımcının Bilmesi Gereken Kritik Maddeler

#### Madde A: Fikri ve Sınai Mülkiyet Hakları (Intellectual Property - IP)
* **Kural:** Şirketinde mesai saatlerinde ve şirketin bilgisayarında yazdığın kodların tüm telif hakları **işverenine (TELCOCLOUD)** aittir.
* **Müşteri İlişkisi:** Müşteri (TÜRK-TEL) platformu satın almaz, onu belirli bir süre **kiralar (SaaS Lisansı)**.
* **Acemi Hatası:** *"Ben bu eSIM servisi için çok güzel bir algoritma yazdım, hafta sonu kendi kişisel GitHub hesabıma atayım da open-source yapayım veya freelance işimde kullanayım."*
  * **Sonuç:** MSA ve ceza kanunu gereği "Ticari sırrı ifşa ve şirket malını çalma" suçundan işten tazminatsız atılabilir, hakkında yüz binlerce dolarlık dava açılabilir!

```
+-------------------------------------------------------------------------+
| DOĞRU: Şirket kodunu asla kişisel hesabına veya üçüncü tarafa taşıma!   |
| YANLIŞ: "Nasılsa kimse fark etmez" diyerek private repo'yu kopyalamak!   |
+-------------------------------------------------------------------------+
```

#### Madde B: Sorumluluğun Sınırlandırılması (Liability Cap)
MSA'lerin en sihirli maddesi **Liability Cap** (Sorumluluk Tavanı) maddesidir.
* Diyelim ki yazdığın bir faturalama servisinde bir bug çıktı ve operatörün 1 günlük cirosu olan 50 Milyon TL tahsil edilemedi.
* Eğer sözleşmede tavan olmasaydı, telekom şirketi sizin şirketinize 50 Milyon TL dava açar ve şirketi anında iflas ettirirdi.
* Ancak iyi bir MSA der ki: *"Tarafların birbirine ödeyeceği toplam zarar, son 12 ayda ödenen lisans bedelini (örneğin 2 Milyon Doları) aşamaz."*
* **Yazılımcı için ders:** Bu tavan seni de şirketini de felaketten korur. Ancak **kasıtlı** yapılan eylemlerde (örneğin bilerek sisteme backdoor / arka kapı koymak veya verileri sızdırmak) tavan geçerli değildir!

#### Madde C: Müşteri Verisi vs. Platform Kodu Ayrımı
* **Kod:** Yazılım şirketine aittir.
* **Veri:** Operatöre ve abonelere aittir.
* **Altın Kural:** Yazılımcı olarak canlı veritabanından test yapmak amacıyla "local makineme 10.000 abonenin gerçek telefon numarasını ve kimlik bilgisini indireyim" diyemezsin. Bu, doğrudan MSA'in ve yasal regülasyonların ihlalidir.

---

### Özet Kontrol Listesi (Checklist)
- [ ] Şirket içinde yazdığım kodların fikri mülkiyetinin şirkete ait olduğunu biliyorum.
- [ ] Müşteri veritabanındaki gerçek verileri asla local makineme kopyalamamam gerektiğini anladım.
- [ ] Şirketimin imzaladığı sorumluluk sınırlarının (Liability Cap) kasıtlı ihmallerde beni korumayacağını aklıma kazıdım.
