# Bölüm 02: SOW ve Şartname Kod Yazarken Nasıl Kullanılır?
> **SOW (Statement of Work - İş Tanımı)** ve **Teknik Şartname**, bir yazılımcının masasında açık durması gereken en temel yol haritasıdır. Kısacası: *"Biz bu paraya tam olarak ne yapıyoruz, neyi kesinlikle yapmıyoruz?"* belgesidir.

---

### 1. Scope Creep (Kapsam Kayması) Canavarı Nedir?

Yazılım projelerinin batmasının bir numaralı sebebi teknik yetersizlik değil, **Scope Creep**'tir.

**Klasik Bir Telekom Senaryosu:**
* **Gün 1:** Sözleşmede şu yazar: *"Abone web portalından faturasını görüntüleyebilecektir."*
* **Gün 45 (Sprint Ortası):** Müşterinin ürün yöneticisi Slack'ten yazar:
  > *"Selam Ahmet! Ya faturayı ekranda gösteriyoruz ama aboneler bunu WhatsApp'tan PDF olarak almak da istiyor. Bir de fatura ödenince tebrik animasyonu patlasın. Kolaydır senin için, 2 saatte halledersin değil mi?"*
* **Acemi Yazılımcının Yanıtı (YAPILMAMASI GEREKEN):**
  > *"Tabii abi ne demek, akşama hallederim!"*

---

### 2. Bu "İyi Niyetli" Cevap Neden Felakete Yol Açar?

1. **Öngörülemeyen Bağımlılıklar:** WhatsApp Business API entegrasyonu gerekir. WhatsApp hattı onaylanmazsa canlıya çıkışınız bloke olur.
2. **Ekstra Maliyet:** WhatsApp mesaj başına ücret alır. Bu faturayı kim ödeyecek?
3. **SLA Riski:** WhatsApp API yavaşlarsa veya çökerse, senin faturalama servisinin p99 latency süresi 45ms'den 3 saniyeye fırlar ve SLA cezası yersiniz!
4. **Zaman Kaybı:** Asıl teslim etmen gereken GSMA eSIM provizyon modülü gecikir.

---

### 3. Doğru Yaklaşım: Kibar ve Profesyonel "SOW Savunması"

Bir yazılımcı olarak müşteriye veya şirket içi satış ekibine kaba davranmak zorunda değilsin. Tek yapman gereken topu kurumsal sürece atmaktır:

```
+-----------------------------------------------------------------------------------+
| DOĞRU YANIT ŞABLONU:                                                              |
| "Çok güzel ve kullanıcı deneyimini artıracak bir öneri!                           |
| Ancak mevcut SOW (İş Tanımı) kapsamımızda yalnızca web fatura görüntüleme var.    |
| Bu talebi 'Kapsam Dışı Yeni Özellik (CR - Change Request)' olarak kaydediyorum.   |
| Ürün yöneticimiz ve Çözüm Mimarımız efor/maliyet analizini yapıp operatör         |
| onayına sunacaktır. Onay gelince seve seve geliştirmeye başlarız."                |
+-----------------------------------------------------------------------------------+
```

---

### 4. SOW'u Kod Yazarken Nasıl Kullanmalısın?

* **Jira / Task Açarken:** Her task'ın açıklamasına ilgili SOW maddesini referans ver:  
  *(Örn: `Ref: SOW Bölüm 3 - Modül 2: 5G CHF Gerçek Zamanlı Kota Sorgusu`)*
* **Architecture Decision Records (ADR):** Mimaride aldığın kararlar SOW'daki gereksinimleri karşılamalıdır. SOW'da "Veriler Türkiye dışına çıkamaz" yazıyorsa, kütüphane olarak Amerika'daki harici bir bulut servisine giden SDK ekleyemezsin.
* **Kabul Kriterleri (Acceptance Criteria):** Bir işi "bitti (Done)" saymadan önce SOW'daki kriterlere bak: 25.000 TPS istiyorsa, 10 kullanıcıyla test edip "bende çalışıyor" diyemezsin.
