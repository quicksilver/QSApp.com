<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Changelog of Quicksilver Utility for macOS" />
		<meta name="keywords" content="Quicksilver, changelog, mac, macOS, os x, launcher, application, utility, productivity, itunes" />
		<title>Quicksilver &#151; Changelog</title>
		<?php include('template/head.tpl'); ?>
	</head>
	<body>
		<div id="Container">
			<?php include('template/logo.tpl'); ?>
			<?php include('template/nav.tpl'); ?>
			<div id="Page-Top"></div>
			<main id="Page">
				<h1>Quicksilver Changelog</h1>
				<div class="Page-Break"></div>
				<?php 
					// This only works on production
					@include('ChangesBare.html');
				?>
				<div class="Page-Break"></div>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
	</body>
</html>
