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

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `Fiam/TABANCA_PIN.html` | Uygulamanın kendisi |
| `Fiam/src/tabanca_makine_veriler.json` | Asıl veri |
| `Fiam/src/veri.js` | Verinin kopyası; sayfa çift tıklayınca bunu okur (otomatik güncellenir, elle düzenleme) |
| `Fiam/src/kaydet.php` | Sunucu modunda kaydetme ucu |
| `Fiam/src/yedek/` | Otomatik yedekler (son 50) |
