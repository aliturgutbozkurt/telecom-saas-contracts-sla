# Bölüm 07: Arıza Yönetimi ve P1 Olayında Ne Yapılmalı?
> Gece saat 03:14. Yatağındasın. Telefonun siren sesiyle çalmaya başladı: **"P1 CRITICAL ALERT: eSIM Provisioning Down - MTTA: 5 mins!"**
> Ne yapacaksın?

---

### 1. P1 (Priority 1) Nedir?

Telekomünikasyonda P1; sistemin can damarının kesilmesidir.
* Abone 5G internetine bağlanamıyor,
* Yeni hat alan 50.000 kişi aktivasyon bekliyor,
* Sözleşmedeki SLA sayacı geriye doğru sayıyor: **Her geçen dakika şirketinize binlerce dolar ceza yazılıyor!**

---

### 2. İlk 5 Dakika Kuralları: Ne Yapmalı, Ne Yapmamalı?

1. **Panik Yapma, Çağrıyı Onayla (Ack):** PagerDuty veya arama geldiğinde hemen "Acknowledge" butonuna bas. Bu, "Uyanığım, olayın farkındayım" demektir ve MTTA (yanıt süresi) sayacını durdurur.
2. **War Room Köprüsüne Katıl:** Slack veya Teams üzerindeki acil durum sesli/görüntülü odasına 3 dakika içinde bağlan.
3. **Köprü Adabına (Bridge Etiquette) Uy:**
   * Odanın tek bir lideri vardır: **Incident Commander (Olay Yöneticisi)**.
   * Mikrofonunu sessize al (Mute). Yalnızca sana soru sorulduğunda veya net bir bilgin olduğunda konuş.
   * *"Ben demiştim zaten o kod patlar"* gibi boş konuşmalar yasaktır; sadece verilere ve metriklere odaklanılır.

---

### 3. Altın İlke: ÖNCE KURTAR, SONRA ARAŞTIR!

Acemi yazılımcıların en büyük hatası, P1 arızası anında logları açıp satır satır kod incelemeye çalışmaktır:
> *"Durun bir dakika, 142. satırdaki NullPointerException'ı debug etmeye çalışıyorum..."* -> **YANLIŞ!**

Bir doktor düşün: Hasta yoğun bakımda kan kaybederken "hastanın çocukluğundaki beslenme alışkanlığını" araştırmazsın; önce kanamayı durdurursun!

```
+-------------------------------------------------------------------------+
| DOĞRU SIRALAMA:                                                         |
| 1. Son 2 saatte yeni bir deployment yapıldı mı?                         |
|    -> Evetse: TARTIŞMASIZ DERHAL ROLLBACK YAP!                          |
| 2. İstanbul Veri Merkezi kilitlendi mi?                                 |
|    -> Evetse: TRAFİĞİ ANINDA ANKARA YEDEK VERİ MERKEZİNE YÖNLENDİR!     |
| 3. Trafik düzeldi ve aboneler hizmet almaya başladı mı?                |
|    -> ŞİMDİ RAHATÇA KAHVENİ AL VE HATANIN KÖK NEDENİNİ (RCA) İNCELE!   |
+-------------------------------------------------------------------------+
```

---

### 4. Suçlamasız Kök Neden Analizi (Blameless Post-Mortem)

Ertesi gün şirket toplanıp arıza raporu yazarken kültürümüz şudur:
* **Asla "Ahmet hata yaptı" denmez.**
* Şu sorulur: *"Ahmet'in yazdığı hatalı bir kodun prod ortamına kadar geçmesine izin veren CI/CD testimiz, kod inceleme sürecimiz veya mimari izolasyonumuz neden yetersizdi?"*
* Hedef insanı cezalandırmak değil, aynı hatanın bir daha yaşanmasını imkansız kılacak sistemik önlemi almaktır.
