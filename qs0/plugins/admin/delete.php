<?php

include("../../../lib/functions.php");

$id = $_GET['id'];
$version = $_GET['version'];
$error = null;
$plugin = Plugin::get(PLUGIN_IDENTIFIER, $id);

if ($plugin) {
  if ($version) {
    /* Search for the correct version */
    foreach ($plugin->versions as $sub_version) {
      if ($sub_version->version == $version)
        $good_plugin = $sub_version;
    }

    /* Swap plugins if we've found one */
    if ($good_plugin) {
      $plugin = $good_plugin;
    } else {
      $error = "Can't find version $version of plugin \"$plugin\"";
      $plugin = null;
    }

    if ($plugin) {
      /* Now delete it */
      if (!$plugin->delete())
        $error = "Failed to delete \"$plugin\"";
      else 
        $error = "Successfully deleted \"$plugin\"";
    }
  }
} else {
  $error = "Can't find plugin with id \"$id\"";
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <title>Deleting <?= $plugin->name ?></title>
</head>
<body>
  <h1>Deleting <?= $plugin->name ?></h1>
  <?php puts($error); ?>
  <a href="index.php">Return to updates</a>
</body>
</html>