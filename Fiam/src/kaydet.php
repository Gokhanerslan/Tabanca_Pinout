<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

$jsonFile = __DIR__ . '/tabanca_makine_veriler.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists($jsonFile)) {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'tabanca_makine_veriler.json bulunamadı.'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    readfile($jsonFile);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $decoded = json_decode($raw, true);

    if ($decoded === null && json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Geçersiz JSON verisi.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Mevcut dosyanın yedeğini al
    if (file_exists($jsonFile)) {
        @copy($jsonFile, __DIR__ . '/tabanca_makine_veriler.bak.json');
    }

    $formatted = json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    if (file_put_contents($jsonFile, $formatted, LOCK_EX) === false) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'JSON dosyasına yazılamadı (klasör yazma iznini kontrol edin).'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        'status' => 'ok',
        'message' => 'Veriler JSON dosyasına kaydedildi.',
        'machineCount' => isset($decoded['machines']) && is_array($decoded['machines']) ? count($decoded['machines']) : 0
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(405);
echo json_encode(['status' => 'error', 'message' => 'Desteklenmeyen HTTP metodu.'], JSON_UNESCAPED_UNICODE);