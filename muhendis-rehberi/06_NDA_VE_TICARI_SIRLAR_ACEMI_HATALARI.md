# Bölüm 06: NDA ve Ticari Sırlar: Acemi Hataları
> *"Sözleşmedeki 'Her bir ihlal için 500.000 USD cezai şart' maddesi gerçekten uygulanır mı abi?"*
> Evet, uygulanır. Hem de şirket avukatları gözünün yaşına bakmaz.

---

### 1. NDA Nedir? Yazılımcıyı Neden İlgilendirir?

**NDA (Non-Disclosure Agreement - Gizlilik Sözleşmesi)**; iki şirketin birbirine açtığı kapıların arkasında gördükleri sırları mezara kadar saklama taahhüdüdür. Bir yazılımcı olarak sen şirketin en mahrem odasındasın: Veritabanı şifreleri, API anahtarları, şebeke mimarisi ve müşteri verileri senin önünden geçiyor.

---

### 2. Acemi Yazılımcının Düştüğü 4 Büyük Tuzak

#### Tuzak 1: GitHub Public Repo'ya `.env` veya API Token Pushlamak
* **Senaryo:** Evde çalışırken kodunu GitHub'a atmak istedin. `.gitignore` dosyana `.env` yazmayı unuttun.
* **Sonuç:** Müşterinin eSIM SM-DP+ test API token'ı veya veritabanı parolası saniyeler içinde GitHub botları tarafından tarandı. Operatörün şebekesine yetkisiz erişim riski doğdu.
* **Kurtuluş Yolu:**
  * Projeye derhal `gitleaks` veya `trufflehog` pre-commit hook'u kur.
  * Hassas bilgileri kodda asla tutma; HashiCorp Vault veya Kubernetes Secrets kullan.

#### Tuzak 2: Genel Yapay Zeka Araçlarına (ChatGPT vb.) Şirket Kodunu ve API Şemasını Yapıştırmak
* **Senaryo:** "Şu 5G CHF ücretlendirme algoritmasını ChatGPT'ye yapıştırayım da bana optimize etsin."
* **Tehlike:** Kamuya açık ücretsiz AI araçları girdiğin verileri kendi modellerini eğitmek için kullanabilir. Telekom operatörünün tescilli algoritmasını ve iç IP adreslerini OpenAI/üçüncü parti sunucularına aktarmış olursun. Bu doğrudan **NDA ihlalidir**.
* **Kural:** Şirket onayı olmayan ve yerel/kapalı çalışmayan harici yapay zeka araçlarına müşteri kodunu, veri modellerini veya loglarını asla yapıştırma!

#### Tuzak 3: LinkedIn'de "Hava Atarken" Ekran Görüntüsü Paylaşmak
* **Senaryo:** "TelcoPulse projemizde bugün harika bir sprint'i tamamladık!" diyerek monitörünün fotoğrafını LinkedIn'e atmak.
* **Faciayı Büyütelim:** Monitörün köşesinde operatörün iç VPN IP'si (`10.240.12.8`), sunucu adı veya henüz lansmanı yapılmamış bir tarife adı görünüyor.
* **Kural:** Şirket monitörünün, ofis içi panoların veya iç mimari diyagramlarının fotoğrafını sosyal medyada asla paylaşma.

#### Tuzak 4: Kahve Sohbetinde "İçeriden Bilgi" (Insider Info) Yaymak
Arkadaşlarına *"Biz TÜRK-TEL'e yeni bir paket motoru yapıyoruz, yılbaşında tüm abonelere bedava 5G dağıtacaklar"* demek, sermaye piyasası ve telekom regülasyonu açısından ağır bir suçtur.
