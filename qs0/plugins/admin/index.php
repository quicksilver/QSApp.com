<?php

require("../../../lib/functions.php");

$plugins = Plugin::all(false, LEVEL_DEV);

$secrets = Plugin::all(true, LEVEL_DEV);

$app = Plugin::get(PLUGIN_IDENTIFIER, QS_ID);

$plugins = array_merge($plugins, $secrets);

?><!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <title>Update administration page</title>
</head>
<body>
<h1 style="text-decoration:underline">Update administration page</h1>

<p><a href="add.php"><strong>Add update/new plugin</strong></a></p>
<div style="width:400px;border-top:1px solid #666;margin:20px 0 10px 0;">

<h2 style="text-decoration:underline">Application Updates</h2>

<p><?= count($app->versions) ?> updates</p>

<table>
  <tr>
    <th>Version</th>
    <th>Level</th>
    <th>Downloads</th>
    <th>Actions</th>
  </tr>
  <?php
  foreach ($app->versions as $version) {
    ?><tr>
      <td><?= $version->displayVersion() ?></td>
      <td><?= $version->level ?></td>
      <td><?= $version->downloads ?></td>
      <td><a href="update.php?id=<?= $version->identifier ?>&amp;version=<?= $version->version ?>">Edit</a></td>
    </tr><?php
  }
  ?>
</table>
<div style="width:400px;border-top:1px solid #666;margin:20px 0 10px 0;">
	<h2 style="text-decoration:underline">Plugins</h2>
<p><?= count($plugins) ?> plugins</p>

<table>
  <tr>
    <th>Name</th>
    <th>Version</th>
    <th>Downloads</th>
    <th>Actions</th>
  </tr>
  <?php
  foreach ($plugins as $plugin) {
    ?><tr>
      <td><?= $plugin->name ?></td>
      <td><?= $plugin->displayVersion() ?></td>
      <td><?= $plugin->downloads ?></td>
      <td><a href="update.php?id=<?= $plugin->identifier ?>&amp;version=<?= $plugin->version ?>">Edit</a></td>
    </tr><?php
  }
  ?>
</table>
</body>
</html>
