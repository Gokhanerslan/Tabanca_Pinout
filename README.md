# Tabanca Pin Out Rehberi

Tabanca markalarının pin şablonlarını ve makinelerin kablo/adres bağlantılarını Excel yerine tek bir HTML sayfasından yönetmek için.

## Kullanım 1 — Bilgisayarda, sunucusuz

1. Repoyu indir (**Code → Download ZIP**) ve zip'ten çıkar.
2. `Fiam/TABANCA_PIN.html` dosyasına çift tıkla (**Google Chrome** veya **Microsoft Edge** ile).
3. Üstteki **KLASÖRE BAĞLAN** butonuna bas ve `Fiam/src` klasörünü seç, izin ver.

Bundan sonra yapılan her değişiklik doğrudan `Fiam/src/tabanca_makine_veriler.json` dosyasına yazılır ve `Fiam/src/yedek/` klasörüne yedek alınır. Klasör ortak bir ağ sürücüsünde de olabilir; iki kişi aynı anda kaydederse çakışma uyarısı çıkar.

> Firefox / Safari dosyaya doğrudan yazamaz: sayfa açılır ve veriler görünür, değişiklikler sadece o tarayıcıda saklanır.

## Masaüstü kısayolu (logolu)

Betik gerekmez. Sayfayı aç → **⚙️ Ayarlar → 📌 Masaüstü kısayolu indir** → inen `Tabanca Baglanti Rehberi.url` dosyasını
**masaüstüne sürükle**. Sayfa kendi adresini bildiği için kısayol, klasör sunucudaki bir paylaşımda (`\\sunucu\...`) ve yol Türkçe
karakterli olsa da doğru çalışır; simgesi `Fiam/logo.ico` olur.

- Kısayol Windows'un **varsayılan tarayıcısıyla** açar (genelde Edge). Sayfayı **hep aynı kısayoldan ve aynı tarayıcıyla** aç:
  seçilen kayıt klasörü her tarayıcıda ayrı hatırlanır.
- **Elle yapmak istersen:** `TABANCA_PIN.html`'e sağ tık → *Gönder → Masaüstü (kısayol oluştur)* → kısayola sağ tık →
  *Özellikler → Simge Değiştir…* → `Fiam/logo.ico`.

## Kaydetme (bilgisayar / ağ klasörü)

"Klasöre bağlan" özelliği **kapalı** (`TABANCA_PIN.html` içinde `const KLASOR_MODU = false;`). Ekranda klasör seçme çubuğu çıkmaz.
Bilgileri giren kişi değişiklikten sonra **💾 Kaydet**'e basar ve JSON dosyasını sunucudaki `Fiam\src` klasörüne kaydeder.
Kayıt zamanı JSON'un içinde (`updatedAt`) saklanır; sayfanın üstünde herkes **🕒 Son güncelleme** zamanını görür.
Sadece izleyenlerin hiçbir şey yapması gerekmez.

## Ağ klasöründe: 💾 Kaydet (Excel gibi)

Edge, ağ paylaşımındaki (`\\sunucu\...`) klasör için "Klasöre bağlan"ı iptal ediyor. Bu durumda değişiklik yaptıktan sonra
sağ üstteki **💾 Kaydet**'e bas: `tabanca_makine_veriler.json` ve `veri.js` hazırlanır; Edge'in kaydetme penceresinde sunucudaki
`Fiam\src` klasörünü seçip **Değiştir** de. Herkes sayfayı yenilediğinde yeni veriyi görür.

- Bir kez: Edge → `edge://settings/downloads` → **"Her indirmede dosyanın nereye kaydedileceğini sor"** açık olsun
  (pencere sonra hep aynı klasörde açılır). Kapalıysa dosyalar İndirilenler'e iner; oradan `src`'ye kopyala.
- Aynı anda iki kişi düzenlerse son kaydeden diğerinin değişikliğini ezer; kalıcı ortak kullanım için web sunucusu önerilir.

## Kullanım 2 — Web sunucusunda (önerilen, klasör seçmek gerekmez)

Edge/Chrome, ağ paylaşımındaki (`\\sunucu\...`) bir klasöre sayfanın yazmasına izin vermiyor. Ortak kullanım için rehber bir
web sunucusunda (IIS veya Apache + PHP) çalıştırılmalı; kurulum adımları **[BILGI_ISLEM_KURULUM.md](BILGI_ISLEM_KURULUM.md)** dosyasında.

Sunucu hazır olunca `TABANCA_PIN.html` içindeki `const SUNUCU_ADRESI = "";` satırına adresi yaz
(ör. `"http://10.30.1.5/tabanca/TABANCA_PIN.html"`): klasör seçme tamamen kapanır, ağ paylaşımındaki eski sayfa ve kısayollar
kendiliğinden sunucuya yönlenir.

### Eski not — PHP'li bir hostingde

`Fiam` klasörünün içeriğini hostinge yükle, `src` klasörüne yazma izni ver, sayfayı adresinden aç. Kayıt `src/kaydet.php` üzerinden yapılır. Kaydetmeyi şifrelemek için `kaydet.php` içindeki `$EDIT_PASSWORD` değerini doldur.

## Makine listesi ve tabanca atama

- **🏭 Makine Listesi** sayfası fabrikadaki bütün makineleri tek tabloda gösterir: bölge, kod, ad, marka, tabanca, soket ve bağlantı durumu.
  Sütun başlığına tıklayınca sıralanır, bölge düğmeleriyle süzülür, **🖨️ Listeyi yazdır** ile çıktısı alınır. İstenirse kart görünümüne geçilir.
- Düzenleme modunda iki adım vardır:
  1. **➕ Makine ekle** — sadece bölge, kod ve ad girilir (bölge listeden seçilebilir).
  2. **🔫 Makineye tabanca ata** — ① bölge seçilir, ② o bölgenin makineleri listelenir ve makine seçilir (istenirse sadece tabancası olmayanlar),
     ③ marka ve tabanca kodu girilir. **Ata ve şemayı aç** deyince markanın uç listesi makineye gelir ve bağlantı şeması hemen açılır.
- Yeni makine eklerken marka da seçilirse makine eklenir, tabanca atanır ve bağlantı şeması tek adımda açılır.
- Tabancası olmayan makineler listede **🔫 Tabanca yok** olarak görünür ve filtrelenebilir.
- Fabrikadaki **290 makine** (`MAKINELER_2026.xlsx`) listeye yüklendi; Excel'deki "Kritik = EVET" olanlar **⚠️ Kritik** olarak görünür ve süzülebilir.
- **Yeni makine geldiğinde:** düzenleme modunda **➕ Makine ekle** ile tek tek, ya da **⬆️ Excel'den makine yükle** ile toplu eklenir.
  Excel/CSV'de *Makine Kodu, Makine Adı, Hat / Bölüm, Açıklama, Kritik* sütunları olmalı. Yeni kodlar eklenir, var olan kodların
  adı/bölgesi/açıklaması güncellenir; tabanca ve bağlantı bilgilerine dokunulmaz. Aynı dosya tekrar yüklenirse makine çoğalmaz.
- Excel okuyucu (SheetJS, Apache-2.0) `Fiam/src/lib/` içindedir, internet olmadan da çalışır.

## Bağlantı durumu

- Makinenin durumu artık uçların doluluğuna göre değil, **elle** belirlenir: **🔫 Tabanca yok → ⏳ Bekliyor → ✅ Bağlantı tamam**.
  Bağlantı sayfasında (düzenleme modu) **✅ Bağlantı tamam olarak işaretle** butonuyla işaretlenir, gerekirse geri alınır.
  Makine listesinde, ana sayfada ve filtrelerde bu durum kullanılır.

## Kayıt güvenliği

- **Yedekler:** Her kayıtta `src/yedek/` klasörüne yedek alınır (son 50 tutulur). Ayrıca **6 ayda bir** `src/yedek/6aylik/`
  klasörüne `donem_YYYY-AA-GG.json` adıyla **hiç silinmeyen kalıcı yedek** alınır (sunucuda ve bilgisayarda).
  Son kalıcı yedeğin tarihi **⚙️ Ayarlar**'da görünür.
- **Bilgisayarda kayıt klasörü:** `Fiam/src` klasörü **bir kez** seçilir; sonra "Klasöre bağlan" çubuğu bir daha çıkmaz.
  Klasörü değiştirmek sadece şifreyle girilen **⚙️ Ayarlar → 📁 Kayıt klasörü** bölümünden yapılır.
  Chrome sayfa kapanınca yazma iznini unutabilir; kilidi açınca Chrome'un kendi küçük **izin** penceresi çıkar
  (**“Her ziyarette izin ver”** seçilirse bir daha sormaz). İzin verilmezse değişiklikler tarayıcıda bekler, kaybolmaz.
- Bilgisayarda (çift tıklayınca) değişiklikler, klasöre bağlanana kadar sadece o tarayıcıda durur; ekranın üstünde
  **"⚠️ Değişikliklerin henüz dosyaya yazılmadı"** uyarısı çıkar ve sayfa kapatılırken tarayıcı uyarır.
- Tarayıcıdaki kayıt klasördeki dosyadan yeniyse, sayfa açılınca o açılır (değişiklik kaybolmaz).
- "Kaydedilmemiş değişiklikler var" sorusunda İPTAL denirse değişiklikler silinmez; **⚙️ Ayarlar → ♻️ Geri getir** ile geri yüklenir.

## Köprüler

- Bağlantı sayfasında (düzenleme modu) **🔗 Köprüler** bölümünden iki uç arasına köprü eklenir; rengi listeden seçilir.
  Köprü şemada kendi renginde kavisli bir kablo olarak çizilir, uç bilgi kartında ve uç listesinde "🔗 Köprülü" olarak görünür.
- Markaya varsayılan köprü tanımlanabilir (**🏷️ Markalar → 🔗 varsayılan köprüler**); o markayla tabanca atanınca makineye kendiliğinden gelir.
  Desoutter için INPUT 0VE ↔ OUTPUT 0VE (mavi) hazır gelir.

## Sinyal seçenekleri (elle yazma sadece adreste)

- Makine sayfasında **sadece adres elle yazılır**. Sinyal (isim + açıklama) ve kablo rengi listeden seçilir.
- Seçenekler markaya göredir ve **🏷️ Markalar → 📚 Sinyal seçenekleri** bölümünde düzenlenir (düzenleme modunda).
  Varsayılan olarak markanın uç listesinden gelir; Kilews için kılavuzdaki olaylar (OK, NG, NG-High, Start IN, Confirm…) da hazırdır.
- **Grup** alanı, seçeneğin hangi uçlarda çıkacağını belirler (ör. ÇIKIŞ seçenekleri sadece çıkış uçlarında). Boş bırakılırsa her uçta çıkar.
- Marka uç listesine yeni sinyal yazıldığında seçeneklere de kendiliğinden eklenir.
- Bağlantı sayfasındaki **📚 Yeni sinyal seçeneği ekle** ile renk ekler gibi doğrudan seçenek eklenebilir (örn. FIAM pin 1 için "Run — Çalıştır").

## Şifre

- **Bakmak için şifre gerekmez.** Değiştirmek için sağ üstteki **🔒 Düzenle** butonuna basıp şifre girilir.
- İlk şifre **1234** — ilk iş **⚙️ Ayarlar → Şifreyi değiştir** bölümünden değiştir.
- 20 dakika işlem yapılmazsa düzenleme kendiliğinden kilitlenir.
- Şifre veride düz metin olarak değil, SHA-256 (tuz + şifre) olarak `settings` altında tutulur.
  Sunucu modunda `kaydet.php` her kayıtta şifreyi kendisi kontrol eder. Bilgisayarda (çift tıklayınca) şifre sadece
  sayfayı korur; JSON dosyasını elle açan biri yine de değiştirebilir.
- Şifreyi unutursan: `src/tabanca_makine_veriler.json` içindeki `"settings"` bölümünü silersen şifre tekrar **1234** olur.

## Varsayılan marka tanımları

| Marka | Soket | Kaynak |
|---|---|---|
| Desoutter | 2 klemens bloğu (INPUT 13, OUTPUT 13), dikey | Kılavuz sayfası (VALSP'li) |
| FIAM | DB25 | TPU-C3 rehberi |
| Doğa, Sehan | DB25 | HDC serisi 25P I/O, P64 = 1 (PLC) |
| Kilews | 2 klemens bloğu (OUTPUT 20, INPUT 20), yatay | KL-GTCS kullanım kılavuzu (s. 32–33, 47): OUT1–9 ve IN_1–10, 40 klemensin tamamı |

Hepsi **Markalar & Şablonlar** sayfasından değiştirilebilir, pin eklenip silinebilir.

## Soket şeması ve görseller

- **Markalar & Şablonlar** sayfasında her markaya soket tipi seçilir: D-Sub 9/15/25/37, klemens sırası veya dairesel (şematik).
  Seçilen tipe göre **Pin & Bağlantı** sayfasında soketin çizimi otomatik oluşur.
- Bütün soketler sadece **arka (kablo / lehim) tarafından** çizilir; PDF ve yazdırmada da yalnız arka görünüm çıkar.
- **Klemens blokları** (Desoutter, Kilews gibi): markaya istediğin kadar blok tanımlanır (örn. `INPUT`, `OUTPUT`),
  her bloğa klemens etiketleri sırayla yazılır (`GND, +24V, 0VE, STOP, n.c., 1-8`), yerleşim dikey veya yatay seçilir.
  Şemada her klemensin yanında İngilizce sinyal adı ve Türkçe açıklaması görünür. Pin tablosundaki **Blok** sütunu pinin hangi bloğa ait olduğunu belirler.
- Pinler, tablodaki **kablo rengine** göre renklenir: tek renk, yan yana çift renk veya siyah kablo + numara. Boş pinler gri kalır.
  Şemadaki bir pine tıklayınca tablodaki satırı gösterilir; tablodaki satıra girince de şemada işaretlenir.
- Her makinenin soket gövde rengi ayrı seçilebilir. Pin tablosunun üstündeki alandan yeni kablo rengi eklenebilir.
- Her markaya ve makineye **görsel** (kılavuzdaki soket çizimi, sahadan fotoğraf) yüklenebilir.
  Görsel küçültülüp `src/gorseller/` klasörüne kaydedilir. Makinenin kendi görseli yoksa markanın görseli gösterilir.
- **Veri / Yedek → JSON yedeği yükle** ile eski "FIAM TPU-C3 DB25 Bağlantı Rehberi" dosyası (`fiam_db25_veriler.json`)
  içe aktarılabilir; içindeki makineler FIAM markasıyla mevcut listeye eklenir.

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `Fiam/TABANCA_PIN.html` | Uygulamanın kendisi |
| `Fiam/logo.ico`, `Fiam/logo.svg` | Uygulama logosu |
| `Fiam/src/tabanca_makine_veriler.json` | Asıl veri |
| `Fiam/src/veri.js` | Verinin kopyası; sayfa çift tıklayınca bunu okur (otomatik güncellenir, elle düzenleme) |
| `Fiam/src/kaydet.php` | Sunucu modunda kaydetme ucu |
| `Fiam/src/yedek/` | Otomatik yedekler (son 50) |
| `Fiam/src/gorseller/` | Yüklenen soket görselleri |
