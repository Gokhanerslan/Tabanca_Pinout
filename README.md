# Tabanca Pin Out Rehberi

Tabanca markalarının pin şablonlarını ve makinelerin kablo/adres bağlantılarını Excel yerine tek bir HTML sayfasından yönetmek için.

## Kullanım 1 — Bilgisayarda, sunucusuz

1. Repoyu indir (**Code → Download ZIP**) ve zip'ten çıkar.
2. `Fiam/TABANCA_PIN.html` dosyasına çift tıkla (**Google Chrome** veya **Microsoft Edge** ile).
3. Üstteki **KLASÖRE BAĞLAN** butonuna bas ve `Fiam/src` klasörünü seç, izin ver.

Bundan sonra yapılan her değişiklik doğrudan `Fiam/src/tabanca_makine_veriler.json` dosyasına yazılır ve `Fiam/src/yedek/` klasörüne yedek alınır. Klasör ortak bir ağ sürücüsünde de olabilir; iki kişi aynı anda kaydederse çakışma uyarısı çıkar.

> Firefox / Safari dosyaya doğrudan yazamaz: sayfa açılır ve veriler görünür, değişiklikler sadece o tarayıcıda saklanır.

## Kullanım 2 — PHP'li bir hostingde

`Fiam` klasörünün içeriğini hostinge yükle, `src` klasörüne yazma izni ver, sayfayı adresinden aç. Kayıt `src/kaydet.php` üzerinden yapılır. Kaydetmeyi şifrelemek için `kaydet.php` içindeki `$EDIT_PASSWORD` değerini doldur.

## Makine listesi ve tabanca atama

- **🏭 Makine Listesi** sayfası fabrikadaki bütün makineleri tek tabloda gösterir: bölge, kod, ad, marka, tabanca, soket ve bağlantı durumu.
  Sütun başlığına tıklayınca sıralanır, bölge düğmeleriyle süzülür, **🖨️ Listeyi yazdır** ile çıktısı alınır. İstenirse kart görünümüne geçilir.
- Düzenleme modunda iki adım vardır:
  1. **➕ Makine ekle** — sadece bölge, kod ve ad girilir (bölge listeden seçilebilir).
  2. **🔫 Makineye tabanca ata** — makine listeden seçilir, marka ve tabanca kodu girilir; markanın uç listesi makineye kendiliğinden gelir.
- Tabancası olmayan makineler listede **🔫 Tabanca yok** olarak görünür ve filtrelenebilir.

## Sinyal seçenekleri (elle yazma sadece adreste)

- Makine sayfasında **sadece adres elle yazılır**. Sinyal (isim + açıklama) ve kablo rengi listeden seçilir.
- Seçenekler markaya göredir ve **🏷️ Markalar → 📚 Sinyal seçenekleri** bölümünde düzenlenir (düzenleme modunda).
  Varsayılan olarak markanın uç listesinden gelir; Kilews için kılavuzdaki olaylar (OK, NG, NG-High, Start IN, Confirm…) da hazırdır.
- **Grup** alanı, seçeneğin hangi uçlarda çıkacağını belirler (ör. ÇIKIŞ seçenekleri sadece çıkış uçlarında). Boş bırakılırsa her uçta çıkar.
- Marka uç listesine yeni sinyal yazıldığında seçeneklere de kendiliğinden eklenir.

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
- D-Sub soketlerde **Arka (lehim)**, **Ön (fiş)** veya **Ön + Arka** görünümü seçilebilir.
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
| `Fiam/src/tabanca_makine_veriler.json` | Asıl veri |
| `Fiam/src/veri.js` | Verinin kopyası; sayfa çift tıklayınca bunu okur (otomatik güncellenir, elle düzenleme) |
| `Fiam/src/kaydet.php` | Sunucu modunda kaydetme ucu |
| `Fiam/src/yedek/` | Otomatik yedekler (son 50) |
| `Fiam/src/gorseller/` | Yüklenen soket görselleri |
