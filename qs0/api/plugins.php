<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include(__DIR__ . "/../../lib/functions.php");

$plugins = Plugin::all(false, LEVEL_DEV, "name ASC");

$result = [];
$now = time();

foreach ($plugins as $plugin) {
    $moddate_unix = strtotime($plugin->modDate);

    $image_url = $plugin->image_url();
    // Check if image_url is empty, contains server path, or doesn't exist
    if (!$image_url || strpos($image_url, "/home/") !== false) {
        $image_url = "/images/plugins/default.png";
    }

    $result[] = [
        'identifier' => $plugin->identifier,
        'name' => $plugin->name,
        'version' => $plugin->displayVersion ?: int_to_hexstring($plugin->version),
        'buildVersion' => intval($plugin->version),
        'author' => $plugin->author,
        'description' => $plugin->description,
        'changes' => $plugin->changes,
        'modDate' => date('Y-m-d', $moddate_unix),
        'modDateUnix' => $moddate_unix,
        'isNew' => ($now - $moddate_unix <= 20 * 24 * 60 * 60),
        'imageUrl' => $image_url,
        'downloadUrl' => 'https://qs0.qsapp.com/plugins/download.php?id=' . $plugin->identifier . '&version=' . $plugin->version
    ];
}

echo json_encode($result);
