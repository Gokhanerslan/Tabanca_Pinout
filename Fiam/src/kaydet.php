<?php
/**
 * Tabanca & Makine Rehberi - JSON veri ucu
 *
 * GET  -> tabanca_makine_veriler.json içeriğini döndürür
 * POST -> gönderilen JSON'u kaydeder (yedek alır, çakışma kontrolü yapar)
 *
 * Kurulum: Bu klasörü (src) PHP çalışan herhangi bir hostinge atman yeterli.
 * Klasörün yazma izni olmalı (genelde 755 / 775 yeterli).
 */

// ------------------------- AYARLAR -------------------------
$DATA_FILE   = __DIR__ . '/tabanca_makine_veriler.json';
$BACKUP_DIR  = __DIR__ . '/yedek';
$BACKUP_KEEP = 50;               // en fazla kaç yedek tutulsun
$MAX_BYTES   = 5 * 1024 * 1024;  // en fazla 5 MB veri kabul et

// Boş bırakırsan herkes kaydedebilir.
// Bir şifre yazarsan sayfa kaydederken bu şifreyi sorar.
$EDIT_PASSWORD = '';
// -----------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

function cevap($code, $data) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function veriOku($file) {
    if (!file_exists($file)) {
        return array('_rev' => 0, 'templates' => new stdClass(), 'machines' => array());
    }
    $raw = file_get_contents($file);
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        cevap(500, array('status' => 'error', 'message' => 'Sunucudaki JSON dosyası bozuk. yedek klasöründen geri yükleyin.'));
    }
    if (!isset($data['_rev'])) $data['_rev'] = 0;
    return $data;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $data = veriOku($DATA_FILE);
    $data['_locked'] = ($EDIT_PASSWORD !== '');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($method !== 'POST') {
    cevap(405, array('status' => 'error', 'message' => 'Desteklenmeyen HTTP metodu.'));
}

// ---- Şifre kontrolü ----
if ($EDIT_PASSWORD !== '') {
    $key = isset($_SERVER['HTTP_X_EDIT_KEY']) ? $_SERVER['HTTP_X_EDIT_KEY'] : '';
    if (!hash_equals($EDIT_PASSWORD, $key)) {
        cevap(401, array('status' => 'error', 'message' => 'Kaydetme şifresi hatalı.'));
    }
}

// ---- Görsel yükleme: POST kaydet.php?gorsel=1  {name, data: "data:image/jpeg;base64,..."} ----
if (isset($_GET['gorsel'])) {
    $raw = file_get_contents('php://input');
    if (strlen($raw) > 12 * 1024 * 1024) cevap(413, array('status' => 'error', 'message' => 'Görsel çok büyük.'));
    $in = json_decode($raw, true);
    $data = isset($in['data']) ? $in['data'] : '';
    if (!preg_match('#^data:image/(jpeg|png|webp);base64,#', $data, $m)) {
        cevap(400, array('status' => 'error', 'message' => 'Sadece JPG, PNG veya WEBP yüklenebilir.'));
    }
    $bin = base64_decode(substr($data, strpos($data, ',') + 1), true);
    if ($bin === false || (function_exists('getimagesizefromstring') && @getimagesizefromstring($bin) === false)) {
        cevap(400, array('status' => 'error', 'message' => 'Görsel dosyası okunamadı.'));
    }
    $ext  = $m[1] === 'jpeg' ? 'jpg' : $m[1];
    $base = preg_replace('/[^a-z0-9_-]+/i', '_', isset($in['name']) ? $in['name'] : 'gorsel');
    $base = substr(trim($base, '_'), 0, 40);
    if ($base === '') $base = 'gorsel';
    $name = $base . '_' . date('Ymd_His') . '_' . substr(md5($bin), 0, 6) . '.' . $ext;
    $dir  = __DIR__ . '/gorseller';
    if (!is_dir($dir)) @mkdir($dir, 0775, true);
    if (!is_dir($dir) || file_put_contents($dir . '/' . $name, $bin) === false) {
        cevap(500, array('status' => 'error', 'message' => 'Görsel kaydedilemedi (gorseller klasörü yazma iznini kontrol edin).'));
    }
    cevap(200, array('status' => 'ok', 'path' => 'gorseller/' . $name));
}

// ---- Gelen veriyi doğrula ----
$raw = file_get_contents('php://input');
if (strlen($raw) > $MAX_BYTES) {
    cevap(413, array('status' => 'error', 'message' => 'Veri çok büyük.'));
}
$incoming = json_decode($raw, true);
if (!is_array($incoming)) {
    cevap(400, array('status' => 'error', 'message' => 'Geçersiz JSON verisi.'));
}
if (!isset($incoming['machines']) || !is_array($incoming['machines'])) {
    cevap(400, array('status' => 'error', 'message' => '"machines" listesi eksik.'));
}
if (!isset($incoming['templates']) || !is_array($incoming['templates'])) {
    cevap(400, array('status' => 'error', 'message' => '"templates" eksik.'));
}

$force   = isset($_GET['force']) && $_GET['force'] === '1';
$baseRev = isset($incoming['_rev']) ? intval($incoming['_rev']) : 0;

// ---- Kilitle, kontrol et, yaz ----
$lock = fopen($DATA_FILE . '.lock', 'c');
if (!$lock || !flock($lock, LOCK_EX)) {
    cevap(500, array('status' => 'error', 'message' => 'Dosya kilitlenemedi (yazma iznini kontrol edin).'));
}

$current    = veriOku($DATA_FILE);
$currentRev = intval($current['_rev']);

if (!$force && $baseRev !== $currentRev) {
    flock($lock, LOCK_UN);
    fclose($lock);
    cevap(409, array(
        'status'  => 'conflict',
        'message' => 'Veri siz açtıktan sonra başka biri tarafından değiştirildi.',
        'server'  => $current
    ));
}

// Yedek al
if (file_exists($DATA_FILE)) {
    if (!is_dir($BACKUP_DIR)) @mkdir($BACKUP_DIR, 0775, true);
    if (is_dir($BACKUP_DIR)) {
        @copy($DATA_FILE, $BACKUP_DIR . '/veri_' . date('Ymd_His') . '_r' . $currentRev . '.json');
        $files = glob($BACKUP_DIR . '/veri_*.json');
        if ($files && count($files) > $BACKUP_KEEP) {
            sort($files);
            foreach (array_slice($files, 0, count($files) - $BACKUP_KEEP) as $old) @unlink($old);
        }
    }
}

unset($incoming['_locked']);
$incoming['_rev']      = $currentRev + 1;
$incoming['updatedAt'] = date('c');

$json = json_encode($incoming, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
$tmp  = $DATA_FILE . '.tmp';
if (file_put_contents($tmp, $json) === false || !rename($tmp, $DATA_FILE)) {
    @unlink($tmp);
    flock($lock, LOCK_UN);
    fclose($lock);
    cevap(500, array('status' => 'error', 'message' => 'JSON dosyasına yazılamadı (klasör yazma iznini kontrol edin).'));
}

// Çift tıklayarak açıldığında (sunucusuz) okunacak kopya
@file_put_contents(__DIR__ . '/veri.js',
    "// Otomatik oluşturulur, elle düzenlemeyin. Asıl veri: tabanca_makine_veriler.json\nwindow.TABANCA_VERI = " . $json . ";\n");

flock($lock, LOCK_UN);
fclose($lock);

cevap(200, array(
    'status'       => 'ok',
    'message'      => 'Kaydedildi.',
    'rev'          => $incoming['_rev'],
    'updatedAt'    => $incoming['updatedAt'],
    'machineCount' => count($incoming['machines'])
));
