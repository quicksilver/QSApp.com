<?php
include('lib/functions.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="en" />
  <meta content="Install Quicksilver plugins to extend its functions and your productivity. Plugins allow interaction with your applications, new interfaces, access to web content, and more." name="description" />
  <meta name="Keywords" content="quicksilver, plugins, modules, mac, productivity, application, itunes" />
<link href="http://qs0.qsapp.com/plugins/rss.php" rel="alternate" type="application/rss+xml" title="A list of the most up to date plugins for Quicksilver." />
  <title>Quicksilver &#151; Plugin Repository</title>
  <?php include('template/head.tpl'); ?>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript">
 $(document).ready(function() {
 $('span.changelogText').hide();
 $('span.pluginChangelog').toggle(function() {
 $(this).siblings('span.changelogText').fadeIn('slow');
 }, function() {
 $(this).siblings('span.changelogText').fadeOut('fast');
 return false;
});
});
</script>
</head>

<body>
  <div id="Container">
    <?php include('template/logo.tpl'); ?>

    <?php include('template/nav.tpl'); ?>

    <div id="Page-Top"></div>

    <div id="Page">
      <h1>Plugin Repository</h1>

      <div id="Page-Break"></div>

<p>Plugins allow you to extend Quicksilver's functions, allowing interaction with your installed applications, new interfaces, access to web content, and more.<br />To learn more about a plugin, see the plugin's Documentation from within the Quicksilver <a href="qs://preferences/#QSPlugInsPrefPane">plugins preferences</a> (select a plugin and press ⌘⌥? or select the 'i' icon).</p>
<p style="text-align:center"><span style="font-size:110%"><strong>It is <em>strongly</em> recommended you install plugins from within <a href="qs://preferences/#QSPlugInsPrefPane">Quicksilver's preferences</a>.</strong></span></p>
<p>	Quicksilver will only show versions of plugins that are known to work for its version, which is not the case for this page.</p>


        <div style="text-align: center; font-size:12px;">Sort through the plugins by either <b>name</b> or <b>updated date</b>.<br/>Click the <img src="images/Button-Add.png" alt="Plugin Changelog" /> button to see the changes for each plugin update.</div>
        <div id="plugins"><?php

        $order = @$_GET["order"] ? @$_GET["order"] : "moddate";
        $sort = @$_GET["sort"] ? @$_GET["sort"] : "DESC";

        ?>
<table> 
<tbody>
<tr>
        <td class="box head name"><a href="?order=name&amp;sort=<?php if($sort == "DESC") echo "ASC"; else echo "DESC";?>">Plugin</a></td>
        <td class="box head version">Vers.</div>
        <td class="box head updated"><a href="?order=moddate&amp;sort=<?php if($sort == "DESC") echo "ASC"; else echo "DESC";?>">Updated</a></div>
</tr>
        <?php

        $plugins = Plugin::all(false, LEVEL_DEV, "$order $sort");

        $now = time();
        $i = 0;
        foreach ($plugins as $plugin) {
          $moddate_unix = strtotime($plugin->modDate);
          $odd = $i % 2 == 1 ? 'odd' : '';

          $image_url = $plugin->image_url();
          if (!$image_url)
            $image_url = "images/plugins/default.png";

          $plugin_url = "http://qs0.qsapp.com/plugins/download.php?id=" . $plugin->identifier . "&amp;version=" . $plugin->version;

          ?>
        <tr>
          <td class="box name <?= $odd ?>">
            <img src="<?= $image_url ?>" alt="plugin icon" />
            <a href="<?= $plugin_url ?>"><?= $plugin->name ?></a>
            <?php if ($plugin->author) { ?><span class="author <?= $odd ?>">by <?= $plugin->author ?></span><?php } ?>
          </td>
          <td class="box version <?= $odd ?>">
            <?php if ($now - $moddate_unix <= 20 * 24 * 60 * 60) { ?><sup><span class="new">new!</span></sup><?php } ?>
            <?= $plugin->displayVersion ? $plugin->displayVersion : int_to_hexstring($plugin->version) ?>
          </td>
          <td class="box updated <?= $odd ?>"><?= strftime("%Y-%m-%d", $moddate_unix) ?></div>
          <?php if ($plugin->description) { ?>
            <td class="box description <?= $odd ?>"><?= $plugin->description ?><span class="pluginChangelog"><img src="images/Button-Add.png" alt="Plugin Changelog" /></span><span class="changelogText">Changes:<br /><?= $plugin->changes ?></span></td>
        </tr>
          <?php } ?>
          <!-- <td class="box" id="dl"><a href="'.$row['fullpath'].'"><img src="images/download.gif" /></a></div>'; -->
          <?php
          $i++;
        }
        ?>
</tbody>
</table>
        <p>&nbsp;</p>
      </div> <!-- Plugins -->

    </div> <!-- Page -->

    <div id="Page-Bottom"></div>

    <?php include('template/footer.tpl'); ?>
    </div> <!-- Container -->
  </body>
</html>
