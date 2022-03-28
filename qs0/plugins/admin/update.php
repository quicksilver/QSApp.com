<?php

include('../../../lib/functions.php');

$submit = @$_GET['submit'];
if (!$submit)
  $submit = @$_POST['submit'];

$id = @$_GET['id'];
if (!$id)
  $id = @$_POST['id'];

$name = @$_GET['name'];
if (!$name)
  $name = @$_POST['name'];

$version = @$_GET['version'];
if (!$version)
  $version = @$_POST['version'];

$error = "";

$plugin = Plugin::get(PLUGIN_IDENTIFIER, $id);
if (!$plugin && $id)
  $error = "Cannot find plugin with ID \"$id\"…";

/* Select correct version */
if ($plugin && $version) {
  if ($plugin->version !== $version) {
    $good_plugin = $plugin->versions[$version];
    if ($good_plugin) {
      $plugin = $good_plugin;
    } else {
      $error = "Cannot find plugin version \"$version\" for ID \"$id\": " . dump_str($plugin) . ".";
      $plugin = null; /* Because we don't want to modify another plugin if this is a submit */
    }
  }
}
if ($plugin) {
  switch ($submit) {
    case "Update":
      $displayVersion = @$_POST['displayVersion'];
      $desc = @$_POST['description'];
      $level = @$_POST['level'];
      $minHostVersion = @$_POST['minHostVersion'];
      $maxHostVersion = @$_POST['maxHostVersion'];
      $minSystemVersion = @$_POST['minSystemVersion'];
      $maxSystemVersion = @$_POST['maxSystemVersion'];
      $secret = @$_POST['is_secret'];
      if (log_level() == LGLVL_DEBUG) { 
        debug(__FILE__ . ": updating \"$id\", \"$version\" with " . dump_str($_POST));
        debug("updating plugin: " . dump_str($plugin));
      }
  
      $plugin->name = $name;
      $plugin->description = $desc;
      if ($displayVersion)
        $plugin->displayVersion = $displayVersion;
  
      $plugin->secret = $secret;
      if ($level != null)
        $plugin->level = $level;
  
      if ($minHostVersion != null)
        $plugin->minHostVersion = $minHostVersion;
  
      if ($maxHostVersion != null)
        $plugin->maxHostVersion = $maxHostVersion;
  
      if ($minSystemVersion != null)
        $plugin->minSystemVersion = $minSystemVersion;
  
      if ($maxSystemVersion != null)
        $plugin->maxSystemVersion = $maxSystemVersion;
  	
	// Update the plugin mod date to be now (p_j_r edit)
	$plugin->modDate = date('Y-m-d h:m:s O');

      if (!$plugin->save())
        $error = "Plugin save failed.";
    break;
  }
}

?><!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <title>Editing <?= $plugin->name ?></title>
</head>
<body>
  <h1>Editing <?= $plugin->name ?></h1>
  <?php
  if ($error)
    echo "<p class=\"error\">" . $error . "</p>";
    if ($plugin) {
  ?>
  <form name="plugin_edit" method="post">
    <input type="hidden" id="id" name="id" value="<?php echo $plugin->identifier; ?>" />
    <input type="hidden" id="version" name="version" value="<?php echo $plugin->version; ?>" />
    <label for="id">ID :</label> <?php echo $plugin->identifier; ?><br />
    <label for="version">Version :</label> <?php echo $plugin->version; ?><br />
    <label for="name">Name :</label>
    <input id="name" name="name" value="<?php echo $plugin->name; ?>" /><br />
    <label for="displayVersion">Display Version :</label>
    <input id="displayVersion" name="displayVersion" value="<?php echo $plugin->displayVersion; ?>" /><br />
    <label for="description">Description :</label><br />
    <textarea id="description" name="description" rows="6" cols="65"><?php echo $plugin->description; ?></textarea><br />
    <label for="level">Level :</label>
    <input type="radio" id="level_nor" name="level" value="0"<?= $plugin->level == 0 ? " checked" : "" ?>><label for="level_nor">Normal</label>&nbsp;&nbsp;
    <input type="radio" id="level_pre" name="level" value="1"<?= $plugin->level == 1 ? " checked" : "" ?>><label for="level_pre">Pre-release</label>&nbsp;&nbsp;
    <input type="radio" id="level_dev" name="level" value="2"<?= $plugin->level == 2 ? " checked" : "" ?>><label for="level_dev">Developer</label><br />
    <input type="checkbox" id="is_secret" name="is_secret"<?= $plugin->secret ? " checked" : "" ?> value="1"/>
    <label for="is_secret">Secret</label><br />
    <span>Host (Quicksilver) Version – </span>
    <label for="minHostVersion">Min:</label><input id="minHostVersion" name="minHostVersion" value="<?php echo $plugin->minHostVersion; ?>" />
    <label for="maxHostVersion">Max:</label><input id="maxHostVersion" name="maxHostVersion" value="<?php echo $plugin->maxHostVersion; ?>" /><br />
    <span>System (OS) Version (Format 10xxyy e.g. 100411 for 10.4.11) – </span>
    <label for="minSystemVersion">Min:</label><input id="minSystemVersion" name="minSystemVersion" value="<?php echo $plugin->minSystemVersion; ?>" />
    <label for="maxSystemVersion">Max:</label><input id="maxSystemVersion" name="maxSystemVersion" value="<?php echo $plugin->maxSystemVersion; ?>" /><br />
    <br />
    Download count : <?= $plugin->downloads ?><br />
    <input type="submit" name="submit" value="Update" />
    <?php
    if (count($plugin->versions)) {
      echo "Versions : ";
      foreach ($plugin->versions as $version) {
        $url = "?id=" . $plugin->identifier . "&version=" . $version->version;
        echo "<a href=\"" . $url . "\">" . $version->displayVersion . " (" . $version->version . ")". "</a> ";
      }
    }
    ?>
  </form>
<p><a href="index.php">Return to Plugins Index Page</a></p>
  <?php
  } else {
  ?><a href="index.php">Return to updates</a><?php
  }
  ?>
<p>&nbsp;</p>
<p><a href="delete.php?id=<?= $plugin->identifier ?>&amp;version=<?= $plugin->version ?>">Delete this plugin (version <?= $plugin->version ?>)</a></p>

</body>
</html>
