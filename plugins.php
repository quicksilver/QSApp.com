<?php
include('lib/functions.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Install Quicksilver plugins to extend its functions and your productivity. Plugins allow interaction with your applications, new interfaces, access to web content, and more." />
		<meta name="keywords" content="Quicksilver, plugins, modules, mac, productivity, application, itunes" />
		<link href="https://qs0.qsapp.com/plugins/rss.php" rel="alternate" type="application/rss+xml" title="A list of the most up to date plugins for Quicksilver." />
		<title>Quicksilver &#151; Plugin Repository</title>
		<?php include('template/head.tpl'); ?>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
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
			<main id="Page">
				<h1>Plugin Repository</h1>
				<div id="Page-Break"></div>
				<p>Super-charge Quicksilver with the addition of plugins. Edit images, interact with apps like Chrome, Mail, Microsoft Word and more, or change the look and feel of Quicksilver with a new interface.<br />To learn more about what each plugin can do, see the 'Plugins' section of the <a href="https://qsapp.com/manual/">Quicksilver Manual</a></p>


				<div style="text-align: center; font-size:12px;">Recent plugin updates and changes.<br/>Click the <img src="images/Button-Add.png" alt="Plugin Changelog" /> button to see the changes for each plugin update.</div>

				<section id="plugins">
					<?php
					// Whitelist allowed columns and sort orders to prevent SQL injection
					$allowed_columns = ['moddate', 'name', 'version'];
					$allowed_sorts = ['ASC', 'DESC'];

					$order = (isset($_GET["order"]) && in_array($_GET["order"], $allowed_columns))
					    ? $_GET["order"] : "moddate";
					$sort = (isset($_GET["sort"]) && in_array($_GET["sort"], $allowed_sorts))
					    ? $_GET["sort"] : "DESC";
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

							$plugin_url = "https://qs0.qsapp.com/plugins/download.php?id=" . $plugin->identifier . "&amp;version=" . $plugin->version;
							?>
							<tr>
								<td class="box name <?= $odd ?>">
									<img src="<?= htmlspecialchars($image_url, ENT_QUOTES, 'UTF-8') ?>" alt="plugin icon" />
									<?= htmlspecialchars($plugin->name, ENT_QUOTES, 'UTF-8') ?>
									<?php if ($plugin->author) { ?><span class="author <?= $odd ?>">by <?= htmlspecialchars($plugin->author, ENT_QUOTES, 'UTF-8') ?></span><?php } ?>
								</td>
								<td class="box version <?= $odd ?>">
									<?php if ($now - $moddate_unix <= 20 * 24 * 60 * 60) { ?><sup><span class="new">new!</span></sup><?php } ?>
									<?= $plugin->displayVersion ? htmlspecialchars($plugin->displayVersion, ENT_QUOTES, 'UTF-8') : int_to_hexstring($plugin->version) ?>
								</td>
								<td class="box updated <?= $odd ?>"><?= strftime("%Y-%m-%d", $moddate_unix) ?></div>
								<?php if ($plugin->description) { ?>
									<td class="box description <?= $odd ?>"><?= htmlspecialchars($plugin->description, ENT_QUOTES, 'UTF-8') ?><span class="pluginChangelog"><img src="images/Button-Add.png" alt="Plugin Changelog" /></span><span class="changelogText">Changes:<br /><?= htmlspecialchars($plugin->changes, ENT_QUOTES, 'UTF-8') ?></span>
								</td>
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
				</section>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
	</body>
</html>