# Bölüm 08: Kabul Testleri (UAT) ve Koşullu Kabul
> *"Testleri lokalde geçtim, staging'e de attım. Müşteri neden hala projeyi kabul edip sözleşmeyi imzalamıyor?"*

Cevap basit: **UAT (User Acceptance Testing - Kullanıcı Kabul Testi)** geçilmeden kurumsal dünyada hiçbir iş "bitmiş" sayılmaz ve tek kuruş fatura kesilemez.

---

### 1. UAT Nedir? Neden Yazılımcının Maaşı Bu İmzaya Bağlıdır?

Projenin sözleşmesinde şöyle yazar:
> *"1.250.000 USD kurulum bedeli, UAT Tutanağının her iki tarafça ıslak/elektronik imza ile onaylanmasından sonra tahakkuk ettirilir."*

Yani şirketin aylardır yaptığı harcama, senin maaşın, ofis kirası ve ikramiyeler; telekom operatörünün test heyetinin atacağı o tek imzaya bağlıdır!

---

### 2. "Bug" vs. "Feature Request" (Hata mı, Yeni İstek mi?)

UAT döneminde en büyük çatışma burada yaşanır:
* **Müşterinin Test Mühendisi:** *"Bu sistemde abonenin son 10 yıllık arama geçmişini Excel olarak indirme butonu yok, bu bir P1 BUG'dır, UAT'yi geçirmiyorum!"*
* **Acemi Yazılımcı (Panik halinde):** *"Hemen yapayım abi, gece gündüz çalışır eklerim..."* -> **BÜYÜK YANLIŞ!**

```
+-----------------------------------------------------------------------------------+
| FARKI NASIL ANLARSIN?                                                             |
| SOW / Teknik Şartnameyi Aç:                                                       |
| 1. Şartnamede "Son 10 yıllık Excel indirilecektir" yazıyor mu?                   |
|    -> EVET: O zaman bu bir BUG'dır. Kodunu düzeltmek zorundasın.                  |
|    -> HAYIR: Şartnamede "Son 6 aylık web özeti" yazıyor.                         |
|       O zaman bu bir BUG DEĞİL, yeni bir FEATURE REQUEST (Değişiklik Talebi)'tir!|
|       Müşteri bunu istiyorsa parasını ve ek süresini vermek zorundadır!          |
+-----------------------------------------------------------------------------------+
```

---

### 3. Kabul Barajı: Hangi Hatalar İmzayı Engeller?

Telekom projesinde UAT kabul kriterleri katıdır:

| Hata Seviyesi | Örnek | Kabulü Engeller mi? |
| :--- | :--- | :--- |
| **P1 (Kritik)** | 5G çağrısı düşüyor, eSIM QR üretilemiyor | **KESİNLİKLE ENGELLER (0 adet olmalı)** |
| **P2 (Büyük)** | Raporlama ekranı açılmıyor, alternatif yol yok | **KESİNLİKLE ENGELLER (0 adet olmalı)** |
| **P3 (Orta)** | Filtreleme butonu yavaş çalışıyor ama çalışıyor | **Engellemez (Koşullu Kabul ile geçer)** |
| **P4 (Kozmetik)**| Butonun rengi mavi yerine açık mavi | **Engellemez (İlk güncellemede düzeltilir)** |

---

### 4. Koşullu Kabul (Conditional Acceptance) Nedir?

Eğer sistemde kritik (P1/P2) hata kalmadıysa, ancak 2-3 tane ufak tefek P3 hatası varsa proje tıkansın istenmez.
* Taraflar **"Koşullu Kabul Tutanağı"** imzalar.
* Müşteri sistemi canlıya alır ve ödemeyi başlatır.
* Yazılım ekibi olarak siz de resmi bir taahhüt verirsiniz: *"Ekli listedeki 2 adet P3 hatasını 15 gün içinde çözeceğiz."*
