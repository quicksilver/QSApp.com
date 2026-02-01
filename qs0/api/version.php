<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include(__DIR__ . "/../../lib/functions.php");

$plugin = Plugin::get(PLUGIN_IDENTIFIER, QS_ID, array());

if (!$plugin) {
    http_response_code(404);
    echo json_encode(['error' => 'Version not found']);
    exit;
}

echo json_encode([
    'version' => $plugin->displayVersion,
    'build' => $plugin->version,
    'minOS' => expand_version($plugin->minSystemVersion),
    'downloadUrl' => 'https://qs0.qsapp.com/plugins/download.php'
]);
