<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include(__DIR__ . "/../../lib/functions.php");

$since = $_GET['since'] ?? null;

if (!$since || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $since) || !strtotime($since)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or invalid "since" parameter. Expected format: YYYY-mm-dd']);
    exit;
}

$plugins = Plugin::query([
    PLUGIN_MOD_DATE => $since,
    PLUGIN_HOST => QS_ID,
    PLUGIN_LEVEL => LEVEL_NORMAL,
], "modDate DESC");

$result = [];

foreach ($plugins as $plugin) {
    $result[] = [
        'identifier' => $plugin->identifier,
        'name' => $plugin->name,
        'version' => $plugin->displayVersion ?: int_to_hexstring($plugin->version),
        'changes' => $plugin->changes,
        'modDate' => date('Y-m-d', strtotime($plugin->modDate)),
    ];
}

echo json_encode($result);
