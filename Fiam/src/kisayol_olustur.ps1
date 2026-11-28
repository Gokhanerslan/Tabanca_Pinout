# Tabanca Bağlantı Rehberi — masaüstüne logolu kısayol oluşturur.
# KISAYOL_OLUSTUR.bat tarafından çalıştırılır. Fiam klasörü sunucudaki bir paylaşımda (\\sunucu\...) da olabilir.
$ErrorActionPreference = 'Stop'
try {
    # Fiam klasörü: .bat ortam değişkeniyle verir; doğrudan çalıştırılırsa betiğin yerinden bulunur
    if ($env:TABANCA_FIAM) { $fiam = $env:TABANCA_FIAM.TrimEnd('\') }
    else { $fiam = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path) }
    $html = Join-Path $fiam 'TABANCA_PIN.html'
    $ico  = Join-Path $fiam 'logo.ico'
    if (-not (Test-Path -LiteralPath $html)) { throw "TABANCA_PIN.html bulunamadı: $html" }

    # Simgeyi bilgisayara kopyala: ağ yavaş ya da kapalıyken de kısayolun logosu görünsün
    $localDir = Join-Path $env:LOCALAPPDATA 'TabancaRehberi'
    New-Item -ItemType Directory -Force -Path $localDir | Out-Null
    $localIco = Join-Path $localDir 'logo.ico'
    Copy-Item -LiteralPath $ico -Destination $localIco -Force

    # Tarayıcı: önce Chrome, yoksa Edge (klasöre kaydetme bu ikisinde çalışır)
    $adaylar = @(
        "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
        "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
        "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
        "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
        "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
    )
    $tarayici = $adaylar | Where-Object { $_ -and (Test-Path -LiteralPath $_) } | Select-Object -First 1

    # file:///C:/...  veya  file://sunucu/paylasim/...  (Türkçe karakterler ve boşluklar kodlanır)
    $adres = ([System.Uri]$html).AbsoluteUri

    $masaustu = [Environment]::GetFolderPath('Desktop')
    $lnkYolu  = Join-Path $masaustu 'Tabanca Bağlantı Rehberi.lnk'
    $sh  = New-Object -ComObject WScript.Shell
    $lnk = $sh.CreateShortcut($lnkYolu)
    if ($tarayici) { $lnk.TargetPath = $tarayici; $lnk.Arguments = '"' + $adres + '"' }
    else           { $lnk.TargetPath = $html }
    $lnk.WorkingDirectory = $fiam
    $lnk.IconLocation     = "$localIco,0"
    $lnk.Description      = 'Tabanca Bağlantı Rehberi'
    $lnk.Save()

    Write-Host ''
    Write-Host '  Kısayol oluşturuldu:' -ForegroundColor Green
    Write-Host "  $lnkYolu"
    Write-Host "  Açılacak sayfa: $adres"
    if ($tarayici) { Write-Host "  Tarayıcı: $tarayici" } else { Write-Host '  Chrome / Edge bulunamadı; varsayılan tarayıcı kullanılacak.' -ForegroundColor Yellow }
    Write-Host ''
    Write-Host '  Sayfayı her zaman bu kısayoldan aç (klasör izni aynı adreste hatırlanır).'
}
catch {
    Write-Host ''
    Write-Host ('  HATA: ' + $_.Exception.Message) -ForegroundColor Red
}
Write-Host ''
Read-Host '  Kapatmak için Enter''a bas' | Out-Null
