# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Olay Yönetimi ve Eskalasyon Matrisi Prosedürü
**Doküman Kodu:** `TR-TELCO-INC-2026-07`  
**Sözleşme Referansı:** `TR-TELCO-MSA-2026-01` Ek-6  
**Sürüm:** `v1.1.0-OPS`  
**Tarih:** 18 Ekim 2026  

---

### 1. Amaç ve Kapsam

Telekomünikasyon şebekesinde arıza anında hızlı, disiplinli ve hatasız müdahale esastır. Bu prosedür; TelcoPulse platformunda meydana gelebilecek teknik aksaklıkların tespitinden kalıcı çözümüne kadar izlenecek olay yönetimi sürecini, eskalasyon basamaklarını, War Room iletişim protokolünü ve Kök Neden Analizi (RCA) standartlarını belirler.

---

### 2. Destek Seviyeleri (Support Tiers)

```
+-----------------------------------------------------------------------------------+
| L1 Destek (OPERATÖR NOC - 7/24)                                                   |
| Alarm tespiti, ilk triyaj, standart playbook çalıştırma (Pod restart, failover)    |
|                                     │ (Sorun çözülemediyse - 5 dk içinde)         |
|                                     ▼                                             |
| L2 Destek (TELCOCLOUD SRE - 7/24 On-Call)                                          |
| Log analizi, network trafiği inceleme, konfigürasyon ve veri tabanı müdahalesi     |
|                                     │ (Kod/Mimaride derin hata varsa - 15 dk)     |
|                                     ▼                                             |
| L3 Destek (TELCOCLOUD Çekirdek Mühendislik / Core Developers)                     |
| Canlı kod yamalama (Hotfix), derin memory-leak analizi, deadlock çözümü           |
|                                     │ (Altyapı/Vendor üçüncü taraf donanım hatası)|
|                                     ▼                                             |
| L4 Destek (Kubernetes / RedHat / HSM Donanım Üreticisi Global Destek)             |
+-----------------------------------------------------------------------------------+
```

---

### 3. P1 Arızalarında Acil Durum "War Room" Protokolü

P1 seviyesinde bir arıza (Çekirdek ücretlendirmenin durması, eSIM aktivasyonunun çökmesi vb.) tespit edildiğinde:

1. **Otomatik Pager ve Köprü Açılışı:** NOC veya Prometheus alertmanager tarafından tetiklenen PagerDuty çağrısı ile eşzamanlı olarak güvenli sesli ve görüntülü acil durum toplantı odası (War Room Bridge) 3 dakika içinde açılır.
2. **Olay Yöneticisi (Incident Commander):** TELCOCLOUD Nöbetçi Kıdemli SRE Mühendisi köprüye katılarak "Olay Yöneticisi" rolünü üstlenir. OPERATÖR NOC Vardiya Amiri ile birlikte müdahaleyi koordine eder.
3. **Müdahale Prensipleri:**
   * **Önce Kurtar, Sonra Araştır:** İlk hedef kök nedeni bulmak değil, servis trafiğini hızla kurtarmaktır (Örn: Trafiği yedek cluster'a yönlendir / Ankara DC'ye devret / son stabil sürüme Rollback yap).
   * **İletişim Frekansı:** P1 süresince her **15 (on beş) dakikada bir**, köprü dışındaki OPERATÖR ve TELCOCLOUD üst yönetimine (CTO / Direktörler) durum güncelleme raporu geçilir.

---

### 4. Eskalasyon Süreleri ve İletişim Zinciri

| Geçen Süre | P1 Arızası Durumu | Aranacak / Bildirim Yapılacak Roller |
| :--- | :--- | :--- |
| **0. Dakika** | Alarm Tetiklendi | OPERATÖR NOC & TELCOCLOUD L1/L2 Nöbetçi Mühendis |
| **5. Dakika** | Yanıt verilmedi veya çözülemedi | TELCOCLOUD SRE Takım Lideri & Çekirdek Ağ Müdürü |
| **15. Dakika** | Sorun devam ediyor | TELCOCLOUD Yazılım Direktörü & TÜRK-TEL BSS Direktörü |
| **30. Dakika** | Şebeke kesintisi sürüyor | TELCOCLOUD CTO (Kerem S. Öztürk) & TÜRK-TEL CTO (Dr. Mehmet Akif Ersoy) |
| **60. Dakika** | SLA İhlal Sınırı Aşıldı | Şirket CEO'ları ve Hukuk Müşavirliği bilgilendirilir |

---

### 5. Kök Neden Analizi (Root Cause Analysis - RCA) Şablonu

Her P1 ve P2 arızasından sonra YAZILIM SAĞLAYICI, olayın çözümlenmesinden itibaren en geç **5 (beş) iş günü içinde** resmi bir RCA raporu sunmak zorundadır. Rapor aşağıdaki asgari bölümleri içermelidir:

```markdown
# P1 Olayı Kök Neden Analizi Raporu (RCA)
- **Olay Referans No:** INC-20261018-001
- **Başlangıç Zamanı:** 18.10.2026 03:14:22 UTC
- **Çözüm Zamanı:** 18.10.2026 03:42:15 UTC (Toplam Kesinti: 27 dk 53 sn)
- **Etkilenen Abone Sayısı / İşlem:** 142.000 eSIM aktivasyon isteği kuyrukta bekledi, 0 veri kaybı.

## 1. Olay Kronolojisi (Timeline)
- 03:14: SM-DP+ bağlantı havuzunda (Connection Pool) tükenme alarmı üretildi.
- 03:17: L2 SRE köprüye katıldı. Redis önbellek yanıt sürelerinin 1.200ms'ye çıktığı görüldü.
- 03:22: Trafik Ankara DR Cluster'a devredildi (Traffic Drain).
- 03:42: Kartal Cluster'da connection leak giderildi, servis normale döndü.

## 2. 5-Why (5 Neden) Analizi
1. Neden eSIM provizyonu durdu? -> SM-DP+ microservisi veritabanına bağlanamadı.
2. Neden bağlanamadı? -> Bağlantı havuzundaki 200 connection da askıda kaldı.
3. Neden askıda kaldı? -> Redis lock mekanizmasında timeout konfigürasyonu eksikti.
4. Neden eksikti? -> Son PR'da (Pull Request) timeout parametresi sehven default değere çekilmişti.
5. Neden testlerde yakalanmadı? -> Yük testi pipeline'ında Redis network gecikmesi simüle edilmemişti (Chaos Engineering eksikliği).

## 3. Alınacak Kalıcı Aksiyonlar (Action Items)
- [ ] Redis bağlantı havuzuna 300ms strict timeout eklenmesi (Sahibi: Core Dev - Termin: 2 gün)
- [ ] Chaos-mesh ile CI/CD pipeline'ına ağ gecikmesi enjeksiyon testi eklenmesi (Sahibi: QA Lead - Termin: 7 gün)
```
