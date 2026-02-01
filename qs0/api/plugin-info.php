<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include(__DIR__ . "/../../lib/functions.php");

use CFPropertyList\CFPropertyList;

// Get parameters
$bundleId = @$_GET['id'];
$version = @$_GET['version'];

// Validate required parameters
if (!$bundleId) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required parameter: id']);
    exit;
}

// Fetch all versions of the plugin to determine pagination
$all_versions = Plugin::query(array(PLUGIN_IDENTIFIER => $bundleId));

if (empty($all_versions)) {
    http_response_code(404);
    echo json_encode(['error' => 'Plugin not found']);
    exit;
}

// Get the requested version or latest
$plugin = null;
$requestedVersion = null;

if ($version) {
    // Convert hex version string to integer if needed
    if (strpos($version, '0x') === 0) {
        $version = hexdec($version);
    } else if (!is_numeric($version)) {
        // Try to interpret as hex without 0x prefix
        if (ctype_xdigit($version)) {
            $version = hexdec($version);
        }
    }
    $requestedVersion = intval($version);
    $plugin = Plugin::get(PLUGIN_IDENTIFIER, $bundleId, array(PLUGIN_VERSION => $requestedVersion));
} else {
    // Get latest version (first in the query results)
    $plugin = $all_versions[0];
}

if (!$plugin) {
    http_response_code(404);
    echo json_encode(['error' => 'Plugin version not found']);
    exit;
}

// Build list of all versions and find pagination info
$versionList = array();
$currentIndex = -1;
foreach ($all_versions as $v) {
    $versionList[] = $v->version;
    if ($v->version == $plugin->version) {
        $currentIndex = count($versionList) - 1;
    }
}
rsort($versionList); // Sort descending so newest is first

// Find next and previous versions
$pagination = array();
$pagination['next'] = null;
$pagination['prev'] = null;

// Find current index in sorted list
$currentIndex = array_search($plugin->version, $versionList);

// Next version is the one after current (higher index = older version in descending order)
if ($currentIndex !== false && $currentIndex < count($versionList) - 1) {
    $pagination['prev'] = int_to_hexstring($versionList[$currentIndex + 1]);
}

// Previous version is the one before current (lower index = newer version in descending order)
if ($currentIndex !== false && $currentIndex > 0) {
    $pagination['next'] = int_to_hexstring($versionList[$currentIndex - 1]);
}

// Initialize result array
$result = array(
    'bundleId' => $plugin->identifier,
    'name' => $plugin->name,
    'version' => int_to_hexstring($plugin->version),
    'displayVersion' => $plugin->displayVersion,
);

// Try to read and parse the plist file
$plist_file = web_root($plugin->plugin_file("qsinfo"));
if ($plist_file && file_exists($plist_file)) {
    try {
        $info_struct = new CFPropertyList($plist_file);
        $info_dict = $info_struct->getValue(true);
        
        // Extract extended description
        if ($info_dict->get('CFBundleGetInfoString')) {
            $value = $info_dict->get('CFBundleGetInfoString');
            $result['extendedDescription'] = method_exists($value, 'getValue') ? $value->getValue() : (string)$value;
        }
        
        // Extract actions (QSActions)
        if ($info_dict->get('QSActions')) {
            $actions = $info_dict->get('QSActions');
            if ($actions) {
                $result['actions'] = array();
                // Handle both array and dictionary formats
                if (method_exists($actions, 'toArray')) {
                    $actionArray = $actions->toArray();
                    foreach ($actionArray as $action) {
                        if (is_object($action) && method_exists($action, 'toArray')) {
                            $result['actions'][] = $action->toArray();
                        } else {
                            $result['actions'][] = $action;
                        }
                    }
                } else if (is_array($actions)) {
                    $result['actions'] = $actions;
                }
            }
        }
        
        // Extract catalog additions (QSResourceAdditions)
        if ($info_dict->get('QSResourceAdditions')) {
            $resources = $info_dict->get('QSResourceAdditions');
            if ($resources) {
                $result['catalogAdditions'] = array();
                if (method_exists($resources, 'toArray')) {
                    $resourceArray = $resources->toArray();
                    foreach ($resourceArray as $resource) {
                        if (is_object($resource) && method_exists($resource, 'toArray')) {
                            $result['catalogAdditions'][] = $resource->toArray();
                        } else {
                            $result['catalogAdditions'][] = $resource;
                        }
                    }
                } else if (is_array($resources)) {
                    $result['catalogAdditions'] = $resources;
                }
            }
        }
        
        // Extract triggers (QSTriggerAdditions)
        if ($info_dict->get('QSTriggerAdditions')) {
            $triggers = $info_dict->get('QSTriggerAdditions');
            if ($triggers) {
                $result['triggers'] = array();
                if (method_exists($triggers, 'toArray')) {
                    $triggerArray = $triggers->toArray();
                    foreach ($triggerArray as $trigger) {
                        if (is_object($trigger) && method_exists($trigger, 'toArray')) {
                            $result['triggers'][] = $trigger->toArray();
                        } else {
                            $result['triggers'][] = $trigger;
                        }
                    }
                } else if (is_array($triggers)) {
                    $result['triggers'] = $triggers;
                }
            }
        }
        
        // Extract additional important items
        if ($info_dict->get('QSPlugIn')) {
            $result['pluginInfo'] = (array)$info_dict->get('QSPlugIn')->toArray();
        }
        
        if ($info_dict->get('QSRequirements')) {
            $result['requirements'] = (array)$info_dict->get('QSRequirements')->toArray();
        }
        
        // Author information
        if ($info_dict->get('CFBundleIdentifier')) {
            $value = $info_dict->get('CFBundleIdentifier');
            $result['bundleIdentifier'] = method_exists($value, 'getValue') ? $value->getValue() : (string)$value;
        }
        
        if ($info_dict->get('CFBundleName')) {
            $value = $info_dict->get('CFBundleName');
            $result['bundleName'] = method_exists($value, 'getValue') ? $value->getValue() : (string)$value;
        }
        
        if ($info_dict->get('CFBundleShortVersionString')) {
            $value = $info_dict->get('CFBundleShortVersionString');
            $result['shortVersionString'] = method_exists($value, 'getValue') ? $value->getValue() : (string)$value;
        }
        
        if ($info_dict->get('QSHotkeys')) {
            $result['hotkeys'] = $info_dict->get('QSHotkeys');
        }
        
    } catch (Exception $e) {
        // If plist parsing fails, still return basic info but include error
        $result['warning'] = 'Could not parse plugin info plist: ' . $e->getMessage();
    }
}

// Add pagination info to response
$result['pagination'] = $pagination;

http_response_code(200);
echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
?>
