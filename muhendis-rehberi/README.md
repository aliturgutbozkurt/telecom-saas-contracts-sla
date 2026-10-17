# Acemi Yazılım Mühendisi İçin Kurumsal Sözleşmeler ve Telekom Hukuku Rehberi
> **"Abi ben sadece kod yazıyorum, hukuki sözleşmeler beni niye ilgilendirsin?"** diyen bir junior yazılımcının hayatını, kariyerini ve şirketini kurtaracak pratik, eğlenceli ve madde madde başucu rehberi.

---

### Hoş Geldin Sevgili Meslektaşım!

Üniversiteden yeni mezun oldun veya bootcamp'i bitirdin. Git biliyorsun, Docker biliyorsun, belki React, Spring Boot veya Go ile mikroservis yazabiliyorsun. Şirkette masana (veya evdeki çalışma masana) oturdun. Bir gün Slack'ten yöneticin veya kıdemli mimarın şu kelimeleri söyledi:

* *"SLA'yi patlattık, P1 açıldı, derhal War Room'a gel!"*
* *"O parametreyi log'a basamazsın, BTK ve KVKK cezası yeriz!"*
* *"Müşteri scope creep yapıyor, SOW dışına çıkamayız, CR (Change Request) açsınlar."*
* *"Yılbaşı yaklaşıyor, haftaya Change Freeze başlıyor, prod'a dokunanın canını yakarlar!"*
* *"Escrow için yeni commit tag'i atıp derleme scriptlerini paketledin mi?"*

Eğer bu cümleleri duyduğunda ekrana boş gözlerle bakıyorsan; **doğru yerdesin.**

Bu rehber, telekomünikasyon gibi saniyenin onda birinin ve milyonlarca liralık cezaların söz konusu olduğu devasa kurumsal dünyada, yazdığın her satır kodun arkasındaki hukuki ve operasyonel mekanizmayı sana en yalın, en samimi ve en pratik dille açıklamak için hazırlandı.

---

### Rehber Haritası ve Okuma Sırası

Her bölüm yaklaşık 4-6 dakikada okunacak şekilde, gerçek hayat örnekleri, "Acemi Hatası" ve "Doğru Yaklaşım" kutucuklarıyla tasarlandı:

| # | Bölüm | Ne Öğreneceksin? |
| :---: | :--- | :--- |
| **00** | [00_GIRIS_VE_SOZLESMELER_NEDEN_VAR.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/00_GIRIS_VE_SOZLESMELER_NEDEN_VAR.md) | Kod yazmak neden yetmez? Şirketler neden 100 sayfa sözleşme imzalar? |
| **01** | [01_MSA_NEDIR_YAZILIMCIYI_NASIL_BAGLAR.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/01_MSA_NEDIR_YAZILIMCIYI_NASIL_BAGLAR.md) | Ana Sözleşme (MSA): Fikri mülkiyet kime ait? Yazdığın kod kimi zengin, kimi işsiz eder? |
| **02** | [02_SOW_VE_SARTNAME_KOD_YAZARKEN_NASIL_KULLANILIR.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/02_SOW_VE_SARTNAME_KOD_YAZARKEN_NASIL_KULLANILIR.md) | Teknik Şartname (SOW) ve Scope Creep: Müşteri "şunu da yapıver" dediğinde ne yapmalısın? |
| **03** | [03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md) | %99.99 Uptime ne demek? Ayda 4.38 dakika çökme hakkı ve Hata Bütçesi (Error Budget). |
| **04** | [04_TELEKOM_VE_YUKSEK_TRAFIK_TPS_LATENCY_CEZALARI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/04_TELEKOM_VE_YUKSEK_TRAFIK_TPS_LATENCY_CEZALARI.md) | 25.000 TPS ve p99 < 45ms tutmazsa şirkete ve sunucu faturasına ne olur? |
| **05** | [05_BTK_KVKK_VE_LOGLARDA_YAPILAN_BUYUK_HATALAR.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/05_BTK_KVKK_VE_LOGLARDA_YAPILAN_BUYUK_HATALAR.md) | console.log'a telefon numarası, IMEI veya IMSI basarsan neden başın belaya girer? |
| **06** | [06_NDA_VE_TICARI_SIRLAR_ACEMI_HATALARI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/06_NDA_VE_TICARI_SIRLAR_ACEMI_HATALARI.md) | GitHub'a yanlışlıkla token pushlamak, LinkedIn'de ekran görüntüsü paylaşmak. |
| **07** | [07_ARIZA_YONETIMI_VE_P1_OLAYINDA_NE_YAPILMALI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/07_ARIZA_YONETIMI_VE_P1_OLAYINDA_NE_YAPILMALI.md) | Gece 03:00'te telefon çalarsa: On-call kuralları, War Room adabı ve kök neden analizi. |
| **08** | [08_KABUL_TESTLERI_UAT_VE_KOSULLU_KABUL.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/08_KABUL_TESTLERI_UAT_VE_KOSULLU_KABUL.md) | "Benim makinede çalışıyordu" neden kabul edilmez? UAT testini geçirme sanatı. |
| **09** | [09_ESCROW_KOD_YEDIEMIN_VE_FELAKET_KURTARMA.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/09_ESCROW_KOD_YEDIEMIN_VE_FELAKET_KURTARMA.md) | Kodumuzu neden banka gibi bir üçüncü şahsa kilitliyoruz? Escrow nedir? |
| **10** | [10_CHANGE_FREEZE_VE_SURUM_YONETIMI.md](file:///Users/aliturgutbozkurt/Desktop/telecom/muhendis-rehberi/10_CHANGE_FREEZE_VE_SURUM_YONETIMI.md) | Yılbaşı gecesi neden prod'a kod atılmaz? CAB onayları ve otomatik geri alma (rollback). |

---

### Unutma Altın Kuralı:
> **"Bir yazılımcı sadece kod yazarak değil, yazdığı kodun hukuki, finansal ve operasyonel sonuçlarının bilincinde olarak 'Kıdemli (Senior)' unvanını hak eder."**
