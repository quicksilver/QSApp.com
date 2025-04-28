<?php
/*
 * File that get accessed when QS wants to check for updates
 * 
 * URL: check.php?type=rel&current=3841
 * type is either rel, pre, dev (Release, Pre-Release, Development)
 * current is the current QS version
 * TODO: p_j_r 01/08/13 - we should really move this checking into info.php
 * TODO: but first we must fix the 'sids' todo there.
 */

include("../../lib/functions.php");
include("../../lib/google.php");

use UnitedPrototype\GoogleAnalytics;

$id = QS_ID;
$type = @$_GET['type'];
$current = @$_GET['current'];

$current = hexstring_to_int($current);

$level = null;
switch ($type) {
  case "dev":
    $level = LEVEL_DEV;
  break;
  case "pre":
    $level = LEVEL_PRE;
  break;
  case "rel":
  default:
    $level = LEVEL_NORMAL;
  break;
}


$tracker = new GoogleAnalytics\Tracker($google_key, $google_domain);
$visitor = new GoogleAnalytics\Visitor();
$visitor->setIpAddress($_SERVER['REMOTE_ADDR']);
$visitor->setUserAgent($_SERVER['HTTP_USER_AGENT']);
$session = new GoogleAnalytics\Session();
$page = new GoogleAnalytics\Page($_SERVER['REQUEST_URI']);
$page->setTitle('Quicksilver Version Check');
$tracker->trackPageview($page, $session, $visitor);

debug("Checking type \"$type\" => \"$level\", current \"$current\"");
$criteria = array(PLUGIN_LEVEL => $level);

debug("Info.php user agent: " . $_SERVER['HTTP_USER_AGENT']);

$os_version = osVersionFromUserAgent($_SERVER['HTTP_USER_AGENT']);

if (!$os_version && @$_GET['osversion']) {
    $os_version = @$_GET['osversion'];
}

if ($os_version) {
  $criteria[PLUGIN_SYSTEM_VERSION] = $os_version;
   debug("Set os criteria to: " . $os_version);
}

$plugin = Plugin::get(PLUGIN_IDENTIFIER, $id, $criteria);
if (!$plugin)
  http_error(500, "Plugin id \"$id\" not found");

// return json for newer versions of QS, backwards compatible with older versions
if (@$_GET['json'] == 1) {
  header("Content-Type: application/json");
  echo json_encode(array(
    'latestDisplay' => $plugin->displayVersion,
    'latest' => int_to_hexstring($plugin->version),
    'current' => int_to_hexstring($plugin->version),
  ));
} else {
  header("Content-Type: text/plain");
  echo int_to_hexstring($plugin->version);
}
?>
