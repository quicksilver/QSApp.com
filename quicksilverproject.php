<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="Quicksilver is an Open Source project" />
		<meta name="keywords" content="Quicksilver, macOS" />
		<title>Quicksilver &#151; The Quicksilver Project</title>
		<?php include('template/head.tpl'); ?>
	</head>
	<body>
		<div id="Container">
			<?php include('template/logo.tpl'); ?>
			<?php include('template/nav.tpl'); ?>	
			<div id="Page-Top"></div>
			<main id="Page">
				<h1>The Quicksilver Project</h1>
				<div class="Page-Break"></div>
				<h2>The Project</h2>
				<p>Quicksilver is an Open Source project maintained by a tight-knit team.<br>
				The Quicksilver project encompasses everything in the Quicksilver environment, including:<br> coding, creating and maintaining plugins, user support, documentation, creating press and maintaining this website.
				<h2>History</h2>
				<img style="width:60%;" src="images/creation.png" alt="Quicksilver: Created 29 June 2003" />
				<p>Quicksilver was created in June 2003 by <strong>Blacktree Software</strong>.<br>
				Three years later, in November 2006, the project was released to the open source world.</p>
				<p style="color:#000;font-size:120%">
					<a style="margin:0 80px 0 3px" href="http://code.google.com/p/blacktree-alchemy/source/list?num=25&amp;start=1">r1</a> <span style="padding:0 100px 0 0">Initial Directory Structure</span> <span>Nov 4, 2006</span>
				</p>
				<p>Following this, Quicksilver had a shaky few years, with its future looking bleak. Several developers fixed a few bugs between 2007 &#150; 2010, but nothing major was achieved.</p>
				<p>Just when Quicksilver looked almost certain to die a slow death, a new group of invigorated developers picked up the project, creating a new QSApp.com site, twitter account and blog.</p>
				<img style="width:80%;" src="images/siteRegistration.png" alt="Quicksilver: Created 29 June 2003" />
				<p>In the early months of 2011, several developers worked vigorously to bring Quicksilver back to its former glory, and to what you see today.</p>
				<p>Today, at over <?php $year = date('Y'); echo ($year - 2003); ?> years old, Quicksilver is the maturest and most versatile launcher application on any operating system.</p>
				<div class="Page-Break"></div>
				<a name="volunteers"></a>
				<h2>The Quicksilver Team</h2>
				<p>Quicksilver is maintained by a small group of devoted volunteers. People come and go, as with any open source project, but the main core are those shown below.</p>
				<div class="Feature">
					<div class="Right-Screenshot">
						<img class="Screenshot" src="images/Team/Patrick.jpg" alt="Patrick Robertson" width="180px" />
					</div>
					<h3>Patrick Robertson</h3>
					<p>Patrick is a freelance developer, who develops mobile apps, OS X apps and web apps. He first contributed to the Quicksilver Project in June 2008.
					Since then, he's gradually expanded on his knowledge of Cocoa and coding for Mac OS X.
					<br/>
					In late 2010, he had the idea of setting up QSApp.com and was a main initiator in kick-starting Quicksilver back into life.</p>
					<p>Today, in and out of his freelance developing, he juggles between writing code for Quicksilver, managing QSApp.com, creating press and urging others to join the Quicksilver band-wagon.</p>
					<p><strong> Why does he do it?</strong> &#151; Because he loves Quicksilver like so many, and believes with passion that there's nothing better out there.</p>
					<p>Twitter: <a href="https://twitter.com/p_j_r">@p_j_r</a> <span class="pipe">|</span> Website: <a href="https://patjack.co.uk">https://patjack.co.uk</a> <span class="pipe">|</span> GitHub: <a href="https://github.com/pjrobertson">pjrobertson</a></p>
				</div>
				<div class="Feature">
					<div class="Right-Screenshot">
						<img class="Screenshot" src="images/Team/Rob.jpg" alt="Rob McBroom" width="180px" />
					</div>
					<h3>Rob McBroom</h3>
					<p>Rob's first contribution was a Remote Hosts Plugin for Quicksilver, accompanied by extensive documentation on building plugins for Quicksilver. This paved the way in making it easier for coders to untangle the complexities of Quicksilver's codebase.</p>
					<p>Rob is a keystone in fixing bugs and implementing new features in Quicksilver, be it writing plugins or creating new interfaces. He's an avid fan of documentation and helps ensure plugins are as easy as possible to understand.</p>
					<p><strong>Why does he do it?</strong> &#151; Similar to Patrick, Rob's been a Quicksilver user since its creation, and just couldn't afford to see it disappear.</p>	
					<p>Twitter: <a href="https://twitter.com/RobMcBroom">@RobMcBroom</a> <span class="pipe">|</span> Website: <a href="http://skurfer.com">http://skurfer.com</a> <span class="pipe">|</span> GitHub: <a href="https://github.com/skurfer">skurfer</a></p>
				</div>
				<div class="Feature">
					<div class="Right-Screenshot">
						<img class="Screenshot" style="margin:1px 0 4px 10px" src="images/Team/Phil.png" alt="Philip Dooher" width="160px" />
					</div>
					<h3>Philip Dooher</h3>
					<p>Phil created the <a href="https://twitter.com/lovequicksilver">@LoveQuicksilver</a> Twitter account to counter the mimes of Merlin Mann.</p>
					<p>Following this, he went on to create the @LoveQuicksilver Blog where he regularly posted hints, and answered users' questions.</p>
					<p><strong>Why does he do it?</strong> &#151; The name 'LoveQuicksilver' says it all. Another avid Quicksilver user, but not a coder, Phil found his own way of contributing to the the Quicksilver Project.</p>
					<p>Twitter: <a href="https://twitter.com/lovequicksilver">@LoveQuicksilver</a> <span class="pipe">|</span> GitHub: <a href="https://github.com/philostein">philostein</a> </p>
				</div>
				<h3>Those who are not Forgotten</h3>
				<p>There are many other notable contributors to the Quicksilver Project.</p>
				<ul>
					<li>Henning Jungkurth and Etienne Samson contribute regularly to Quicksilver's codebase.</li>
					<li>Ankur Kothari, Florian Heckl, Matt Beshara and Eric Doughty-Papassideris have previously helped a great deal in maintaining Quicksilver.</li>
					<li>Jon Stovell and Howard Melman are known for helping users in the <a href="https://groups.google.com/g/blacktree-quicksilver">support forums</a>.</li>
					<li><a href="https://strandeddesign.com">Dan Deming-Henes</a> made this beautiful site, as well as some new icons for Quicksilver.</li>
					<li>Open Source software would not survive without the support of companies for bandwidth and hosting. <a href="https://github.com">GitHub</a> provides Version Control, whilst <a href="http://www.unitedhosting.co.uk">United Hosting</a> provides bandwidth for this site.</li>
				</ul>
				<p>If you'd like to be a part of the project, there are many ways in which you can help: <a href="https://www.transifex.net/projects/p/quicksilver/">Translation</a>, <a href="/wiki/Developer_Information">Coding</a>, <a href="/wiki">Documentation</a>, <a href="https://groups.google.com/g/blacktree-quicksilver">Supporting Users</a> or simply just Spreading the Word.</p>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
	</body>
</html>