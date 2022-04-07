<?php
include("lib/functions.php");
$plugin = Plugin::get(PLUGIN_IDENTIFIER, QS_ID, array());
$version = $plugin->displayVersion;
$min_os = expand_version($plugin->minSystemVersion);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Download Quicksilver Utility for macOS" />
		<meta name="keywords" content="Quicksilver, download, mac, macOS, os x, launcher, application, utility, productivity, itunes" />
		<title>Quicksilver &#151; Download</title>
		<?php include('template/head.tpl'); ?>
	</head>
	<body>
		<div id="Container">
			<?php include('template/logo.tpl'); ?>
			<?php include('template/nav.tpl'); ?>
			<div id="Page-Top"></div>
			<main id="Page">
				<h1>Download Quicksilver</h1>
				<div class="Page-Break"></div>
				<p>To download Quicksilver for macOS, select the compatible version for your operating system version.<br />
				View the <a href="changelog.php">changelog</a> to see the recent changes to Quicksilver. Monterey may warn about Quicksilver being unsigned: <strong>ctrl-click</strong> Quicksilver and choose 'Open' from the 'unsigned' dialog. It will now open without warnings.</p>

				<section id="Download">
					<article class="Download-Option">
						<img src="images/quicksilver-icon-2022.png" width="128" height="128" alt="Download latest release of Quicksilver" /><br />
						<h2 class="Download-Title">Latest release (macOS <?php echo $min_os; ?>+)</h2>
						<div class="Download-Button-Container">
							<a class="Download-Button" href="https://qs0.qsapp.com/plugins/download.php">Download <?php echo $version; ?></a>
						</div>
					</article>

					<article class="Download-Option">
						<img src="images/other.png" width="128" height="128" alt="Other Quicksilver Downloads" /><br />
						<h2 class="Download-Title">All Downloads</h2>
						<div class="Download-Button-Container">
							<a class="Download-Button" href="/archives/">Download Older Versions</a>
						</div>
					</article>

					<div class="clear"></div>
				</section>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
	</body>
</html>
