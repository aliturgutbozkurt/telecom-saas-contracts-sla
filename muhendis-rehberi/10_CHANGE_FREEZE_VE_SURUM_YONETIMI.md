# Bölüm 10: Change Freeze ve Sürüm Yönetimi
> *"31 Aralık günü saat 16:00. Ufak bir CSS ve metin düzeltmesi var, hemen prod'a atıvereyim de yeni yıla temiz girelim..."*
> **DUR! SAKIN O TUŞA BASMA!**

Eğer bir telekom operatörünün canlı sistemine yılbaşı haftasında kod atmaya kalkarsan, kapıya güvenlik gelebilir. Neden mi?

---

### 1. Telekomda "Change Freeze" (Dondurma) Kutsaldır!

Yılbaşı gecesi saat 00:00'ı gösterdiğinde Türkiye genelinde ne olur?
* Milyonlarca insan aynı anda telefonuna sarılır.
* Yüz milyonlarca arama, WhatsApp mesajı, SMS ve görüntülü konuşma şebekeye yüklenir.
* Şebeke yıllık maksimum pik (Peak Traffic) noktasına ulaşır.

Böyle bir anda sistemde yapılacak en ufak bir konfigürasyon değişikliği, bellek sızıntısı veya veritabanı kilitlenmesi, **ulusal çapta bir iletişimsizlik krizine** yol açar.

Bu yüzden telekomda **20 Aralık - 05 Ocak** tarihleri arasında **Change Freeze (Değişiklik Dondurma)** ilan edilir.

---

### 2. Freeze Döneminde Ne Olur?

```
+-------------------------------------------------------------------------+
| CHANGE FREEZE KURALLARI:                                                |
| 1. Canlı ortama (Production) kesinlikle yeni özellik deploy edilemez.   |
| 2. Veritabanında tablo, indeks veya şema değişikliği yapılamaz.        |
| 3. Sunucularda işletim sistemi veya kernel güncellemesi yapılamaz.      |
| 4. İSTİSNA: Yalnızca sistemi kurtaracak P1 acil güvenlik yamaları       |
|    her iki şirketin CTO'sunun ortak imzasıyla atılabilir!              |
+-------------------------------------------------------------------------+
```

---

### 3. CAB (Change Advisory Board - Değişiklik Kurulu) Nedir?

Bir startup'ta kod yazarken PR merge edilir edilmez otomatik prod'a gidebilir. Kurumsal telekomda ise **CAB Onayı** şarttır.

Her salı günü toplanan kurul şu soruları sorar:
1. Bu sürümde hangi özellikler değişiyor?
2. Test ortamında kaç saat test edildi?
3. **Geri Alma (Rollback) Planınız Nedir?** *(Eğer yeni sürüm patlarsa eski sürüme kaç saniyede dönebilirsin?)*
4. Risk analizi yapıldı mı?

Eğer geri alma planın yoksa, CAB sürümüne **asla onay vermez**.

---

### 4. Modern Dağıtımın Can Simidi: Kanarya (Canary) Dağıtımı

TelcoPulse'da 50 Milyon aboneye aynı anda kod güncellenmez:

```
[Yeni Sürüm v1.2]
       │
       ▼
1. Adım: Sadece %1 Aboneye Açılır. (60 dakika boyunca p99 gecikme ve hata oranları izlenir)
       │
       ▼ (Hata yoksa)
2. Adım: %10 Aboneye Açılır.
       │
       ▼ (Metrikler hala yeşilse)
3. Adım: 24 saat içinde kademeli olarak %100'e yayılır.
```

**Otomatik Rollback:** Eğer %1'lik aşamadayken HTTP 5xx hata oranı %0.05'i geçerse veya p99 gecikme 60ms'yi aşarsa; ArgoCD ve Prometheus sistemi **insan müdahalesine gerek kalmaksızın 10 saniye içinde otomatik olarak eski sürüme geri çeker!**

---

### Tebrikler Mühendis! 🎓

Bu rehberin sonuna geldin. Artık:
* Sözleşmelerin şirketi ve seni nasıl koruduğunu,
* Bir telekom sisteminde saniyelerin ve milisaniyelerin değerini,
* P1 arızasında nasıl soğukkanlı davranılacağını,
* Yasal loglama ve veri egemenliğinin hayati önemini biliyorsun.

Sen artık sadece kod yazan bir yazılımcı değil; **sistemin bütününü gören gerçek bir yazılım mühendisisin.** Başarılar!
