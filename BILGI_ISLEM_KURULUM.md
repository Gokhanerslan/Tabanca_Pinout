# Tabanca Bağlantı Rehberi — Sunucu Kurulumu (Bilgi İşlem için)

## Amaç

**Tabanca Bağlantı Rehberi** tek sayfalık bir web uygulamasıdır (HTML + küçük bir PHP dosyası). Bakım ekibi şu an sayfayı
`\\10.30.1.5\MD_Maintenance\...` ağ paylaşımından açıyor. Edge, bir sayfanın ağ paylaşımındaki klasöre yazmasına izin vermediği
için değişiklikler kaydedilemiyor.

Uygulama bir web sunucusundan (`http://...`) açılırsa kayıtlar sunucudaki bir JSON dosyasına otomatik yazılır. Kullanıcıların
klasör seçmesi ya da tarayıcıya izin vermesi gerekmez; herkes her bilgisayardan aynı veriyi görür.

## Gerekenler

- **Web sunucusu:** PHP 7.4 veya üstünü çalıştırabilen herhangi bir web sunucusu.
  - Windows Server'da **IIS + PHP (FastCGI)**. Bu not IIS'e göre yazıldı.
  - Ya da her zaman açık bir bilgisayarda **Apache + PHP** (ör. XAMPP).
- **Veritabanı gerekmez.** Veri tek bir JSON dosyasında tutulur, yedekler aynı klasöre alınır.
- **Erişim:** Yalnızca iç ağdan erişim yeterli.
- **Disk:** Birkaç MB.

## Kurulum (IIS)

1. **IIS'i ve CGI'ı açın.** Sunucu Yöneticisi → Rol ekle → *Web Sunucusu (IIS)*. Uygulama Geliştirme altında **CGI** seçili olmalı.
2. **PHP'yi kurun.** PHP 8.x **Non Thread Safe x64** sürümünü indirin, örneğin `C:\PHP` klasörüne açın.
   - IIS'te *İşleyici Eşlemeleri → Modül Eşlemesi Ekle* yolunu izleyin: istek yolu `*.php`, modül `FastCgiModule`, yürütülebilir dosya `C:\PHP\php-cgi.exe`.
   - Bu adım "PHP Manager for IIS" ile de yapılabilir.
3. **Dosyaları kopyalayın.** Depodaki `Fiam` klasörünün içeriğini örneğin `C:\inetpub\wwwroot\tabanca\` altına kopyalayın.
   Klasörde `TABANCA_PIN.html`, `logo.ico`, `logo.svg` ve `src\` bulunmalı.
4. **Yazma izni verin.** `C:\inetpub\wwwroot\tabanca\src` klasörüne uygulama havuzu kimliği için **Değiştir (Modify)** izni verin.
   Kimlik, örneğin `IIS AppPool\DefaultAppPool` olabilir.
   - PHP bu klasöre `tabanca_makine_veriler.json`, `veri.js` dosyalarını ve `yedek\` klasörünü yazar.
5. **Test edin.**
   - `http://10.30.1.5/tabanca/src/kaydet.php` adresi JSON döndürmeli (`{"_rev":...`).
   - `http://10.30.1.5/tabanca/src/tabanca_makine_veriler.json` adresi **engellenmeli (404)**. `src/web.config` bunu sağlar.
   - `http://10.30.1.5/tabanca/TABANCA_PIN.html` sayfası açılmalı.
6. **Güvenlik duvarı:** Sunucuda TCP **80** (ya da kullanılan port) iç ağa açık olmalı.

> Dosyalar ağ paylaşımında (UNC) bırakılıp IIS sanal dizini oraya yönlendirilirse uygulama havuzu kimliğinin o paylaşımda
> **yazma** yetkisi de olmalı. Yerel diske (`C:\inetpub\...`) kurmak daha sorunsuzdur.

## Sunucu adresini uygulamaya yazmak

`TABANCA_PIN.html` dosyasında şu satırı bulun:

```js
const SUNUCU_ADRESI = "";
```

Sunucu adresini yazın:

```js
const SUNUCU_ADRESI = "http://10.30.1.5/tabanca/TABANCA_PIN.html";
```

Bu değişikliği hem **sunucudaki** kopyada hem de **ağ paylaşımındaki eski kopyada** yapın. Sonuçları:

- Sayfada klasör seçme özelliği tamamen kapanır.
- Ağ paylaşımındaki eski sayfa ya da eski masaüstü kısayolu açılınca kullanıcı kendiliğinden sunucu adresine yönlendirilir.

## Güvenlik ve yedek

- **Herkes görüntüleyebilir.** Değişiklik yapmak için uygulamanın düzenleme şifresi gerekir.
  - Şifre, sunucuda `kaydet.php` tarafından **her kayıtta kontrol edilir**; şifresiz istekler `401` ile reddedilir.
  - Şifre, verinin içinde düz metin olarak değil, SHA-256 (tuz + şifre) olarak tutulur.
- **Yedekler:**
  - Her kayıtta `src\yedek\` klasörüne yedek alınır; son 50 tutulur.
  - 6 ayda bir `src\yedek\6aylik\` klasörüne **silinmeyen** kalıcı yedek alınır.
- **Sunucu yedeği:** Sunucu yedekleme planına `tabanca\src\` klasörünün eklenmesi önerilir.
- **Çakışma kontrolü:** Aynı anda iki kişi kaydederse ikincisi uyarılır; veri sessizce ezilmez.

## Sorun giderme

| Belirti | Neden / çözüm |
|---|---|
| Sayfa açılıyor ama "Sunucu yok" yazıyor | `src/kaydet.php` çalışmıyor; PHP işleyici eşlemesini kontrol edin |
| Kayıtta "JSON dosyasına yazılamadı" | `src` klasöründe uygulama havuzu kimliğinin **Değiştir** izni yok |
| `.json` dosyası tarayıcıda açılabiliyor | `src/web.config` kopyalanmamış ya da IIS istek filtreleme modülü kapalı |
