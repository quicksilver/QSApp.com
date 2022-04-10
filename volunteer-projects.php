<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Learn about Quicksilver, a productivity app for macOS which gives you the ability to perform common, every-day tasks rapidly and without thought." />
		<meta name="keywords" content="Quicksilver, mac, os x, macOS, launcher, application, utility, productivity, itunes" />
		<title>Quicksilver &#151; About &amp; Features</title>
		<?php include('template/head.tpl'); ?>
	</head>
	<body>
		<div id="Container">
			<?php include('template/logo.tpl'); ?>
			<?php include('template/nav.tpl'); ?>
			<div id="Page-Top"></div>
			<main id="Page">
				<h1>Other Ways to Support Quicksilver</h1>
				<p>Other than financial donations, the Quicksilver project requires help with the following projects and tasks:</p>
				<ul>
					<li>Translating Quicksilver into your local language. Join the <a href="https://www.transifex.com/projects/p/quicksilver/">Quicksilver Transifex project</a> to get started translating.</li>
					<li>Help improve Quicksilver's documentation. Add information to the <a href="/wiki">Quicksilver Wiki</a>, create YouTube screencasts and videos, or <a href="https://github.com/quicksilver/Quicksilver/issues">submit an issue on Github</a> outlining areas we can improve Quicksilver documentation.</li>
					<li>Website upkeep. Website design work, and content creation and updating. Submit a post titled 'Website Volunteering' to the <a href="https://groups.google.com/g/quicksilver---development">Quicksilver Developer Community</a> to get started.</li>
					<li>App UI improvements. Provide new icons or mockups of areas to improve Quicksilver's UI. Submit a post titled 'Quicksilver UI' to the <a href="https://groups.google.com/g/quicksilver---development">Quicksilver Developer Community</a> to get started.</li>
					<li>Spread the word about Quicksilver using social media. Share how you use Quicksilver on social media, using the tag #quicksilverapp</li>
				</ul>
				
				<h2>Something Else?</h2>
				
				<p>If you can think of another way to help support Quicksilver, then submit a topic to the <a href="https://groups.google.com/g/quicksilver---development">Quicksilver Developer Community</a> with your idea, and we'll help you get started.</li>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
		<script src="js/prototype.js"></script>
		<script src="js/effects.js"></script>
		<script src="js/glider.js"></script>
		<script>
			const glider = new Glider('about_glider', {duration:0.5});
		</script>
	</body>
</html>