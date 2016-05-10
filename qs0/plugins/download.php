<?php

/*
 * File that get accessed when QS request an update (either plugin or main application)
 * 
 * When updating the app, we'll recieve :
 *   /download.php?id=com.blacktree.Quicksilver&type=dmg&new=yes
 * When updating a plugin, we'll recieve :
 *   /download.php?qsversion=%d&id=%@
 */

include("../../lib/functions.php");
include("../../lib/google.php");

use UnitedPrototype\GoogleAnalytics;

$id = @$_GET['id'];
$version = @$_GET['version'];


$tracker = new GoogleAnalytics\Tracker($google_key, $google_domain);
$visitor = new GoogleAnalytics\Visitor();
$visitor->setIpAddress($_SERVER['REMOTE_ADDR']);
$visitor->setUserAgent($_SERVER['HTTP_USER_AGENT']);
$session = new GoogleAnalytics\Session();
$page = new GoogleAnalytics\Page($_SERVER['REQUEST_URI']);
$page->setTitle('Quicksilver Download');
$tracker->trackPageview($page, $session, $visitor);

/* Uncomment that if you want to provide latest qs version if nothing is requested */
if (!$id)
  $id = QS_ID;

$plugin = null;
if ($id == QS_ID) {
  /* Application update */
  $type = @$_GET['type']; // Unused
  
  /* Reconstruct level */
  if (@$_GET['dev'])
    $level = LEVEL_DEV;
  else if (@$_GET['pre'])
    $level = LEVEL_PRE;
  else
    $level = LEVEL_NORMAL;

// For pages like the 'download.php' page, we need to sniff for the version we want
  $qsversion = intval(@$_GET['qsversion']);
  if($qsversion) {
	$criteria[PLUGIN_VERSION] = $qsversion;
        debug($qsversion);
  }
  if (@$_GET['new'] && !$qsversion) {
     // this is an in app update, requesting the newest version for this system - set the min/max OS version
     $os_version = osVersionFromUserAgent($_SERVER['HTTP_USER_AGENT']);

     if ($os_version) {
       $criteria[PLUGIN_SYSTEM_VERSION] = $os_version;
     }
  }
  
  $criteria[PLUGIN_LEVEL] = $level;
  debug("Query string: " . $_SERVER['QUERY_STRING']);
  // DO NOT, under *ANY* circumstances, change this. It allows for the faulty ß61 which could not update apps properly
  if(strstr($_SERVER['HTTP_USER_AGENT'],"3900") || strstr($_SERVER['HTTP_USER_AGENT'],"3901")) {
    die();
    if (!send_file('/plugins/files/QSB62x.empty', "Quicksilver ß62x.dmg"))
      debug("send_file failed");
  }

  debug("Request for application download \"$id\" with level $level");
  $plugin = Plugin::get(PLUGIN_IDENTIFIER, $id, $criteria);
  if (!$plugin)
    http_error(404, "Application not found");

  /* Start the download ! */
  if (!$plugin->download())
    http_error(404, "Update file not found");

} elseif ($id != null) {

  $criteria = array();
  $qsversion = @$_GET['qsversion'];
  $criteria[PLUGIN_HOST] = QS_ID;
  $criteria[PLUGIN_IDENTIFIER] = $id;

  if ($version)
    $criteria[PLUGIN_VERSION] = intval($version);

  if ($qsversion)
    $criteria[PLUGIN_HOST_VERSION] = $qsversion;

  debug("Request for plugin download \"$id\" with criterias " . dump_str($criteria));
  $plugin = Plugin::get(PLUGIN_IDENTIFIER, $id, $criteria);
  if (!$plugin)
    http_error(404, "Plugin not found");

  /* Start the download ! */
  if (!$plugin->download())
    http_error(404, "Update file not found");
} else {
  http_error(400, "Unknown update requested");
}
http_error(200, "OK");
?>
