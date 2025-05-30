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
				<h1>About Quicksilver</h1>
				<p>Quicksilver is a launcher utility app for macOS which gives you the ability to perform common, every-day tasks rapidly and without thought. An introduction to Quicksilver's abilities include:</p>
				<ul>
					<li>Accessing applications, documents, contacts, music and much, much more.</li>
					<li>Browsing your Mac's filesystem elegantly using keywords and 'fuzzy' matching.</li>
					<li>Managing content through drag and drop, or grabbing selected content directly.</li>
					<li>Interacting with installed applications through <a href="plugins.php">plugins</a>.</li>
				</ul>
				<p style="font-size:110%"><a href="/quicksilverproject.php">Find out</a> about the  Quicksilver Project and the team behind it.</p>
				<div class="Page-Break"></div>
				<section id="about_glider">
					<a href="#" onclick="glider.previous();return false;" id="prev_button"></a>
					<a href="#" onclick="glider.next();return false" id="next_button"></a>
					<div class="scroller">
						<div class="content">
							<div class="section" id="section1">
								<img class="Screenshot" src="images/why_findfast.png" title="Find it fast" alt="Searching in Quicksilver"/>
								<h2>Find and Do</h2>
								Quicksilver gives you quick access to all your important things. With only a few keystrokes, you can get to your applications, files, contacts, bookmarks, music, etc. Don't get distracted though; although Quicksilver finds and launches things quickly and extremely well, it's more about <em>doing</em>, not finding.
							</div>
							<?php /*
							<div class="section" id="section2">
								<img class="Screenshot" style="width:350px" src="images/why_launch.png" title="Lauch an application" alt="Launch application and files with Quicksilver"/>
								<h2>Launch that thing</h2> 
								Want to start Mail.app? Type "mail" and press return. Too much typing? Then type "m" and select Mail.app from the list of results. Quicksilver learns your abbreviations as you use them. <br>
								This isn't limited to applications. It applies to anything in Quicksilver's catalog: contacts, documents, bookmarks, music and more.
							</div>
							*/ ?>
							<div class="section" id="section2">
								<img class="Screenshot" src="images/why_gatewaydrug.png" title="Do almost anything" alt="Do almost anything with Quicksilver"/>
								<h2>Launching is a gateway drug</h2>
								Saying that Quicksilver is an application launcher is like saying a car is a cup holder. You can do almost anything with Quicksilver. Quicksilver's art is in learning what you like doing, and turning your chores into two-second thoughts. By knowing your habits, Quicksilver blurs the line between thinking about something and simply getting it done.
							</div>
							<div class="section" id="section3">
								<img class="Screenshot" style="width:270px" src="images/why_abbreviations.png" title="Flexible abbreviations" alt="Abbreviating results in Quicksilver"/>
								<h2>Type it like you think it</h2>
								Using Spotlight or a similar app to find the contact 'John Smith' requires you to search for say "john". What if you want to just type "js"? Quicksilver lets you abbreviate using letters from anywhere in the name, and that means anywhere. Use "ps" to find Photoshop or "tun" to find iTunes.<br>Use abbreviations that make sense to you.
							</div>
							<div class="section" id="section4">
								<img class="Screenshot" src="images/why_reverse.png" title="Works either way" alt="Reverse the action in Quicksilver"/>
								<h2>Do it like you think it</h2>
								Quicksilver lets you do things how you think of them, adapting to however you think.
								<br>You can Google search for 'some text', or find 'some text' with Google search.<br>
								<br>
								You can select a contact and e-mail them a file, or you can select a file and e-mail it to a contact.<br>
								No thinking. No planning. No adjusting. Just doing.
							</div>
							<div class="section" id="section5">
								<img class="Screenshot" src="images/why_stay.png" title="No need to switch apps" alt="Perform everything from Quicksilver"/>
								<h2>Stay where you are</h2>
								With Quicksilver, you never need to stop what you're doing to complete simple tasks. Move the file you just downloaded to your Documents folder without leaving your browser. Add something to your To Do List as soon as you think of it. Quicksilver allows you to process your thoughts instantly, and lets you get right back to what you want to be doing.
							</div>
							<div class="section" id="section6">
								<img class="Screenshot" src="images/why_grab.png" title="Grab the selection from any app" alt="Grab results from any application into Quicksilver"/>
								<h2>Grab and go</h2>
								Select files or text and act upon them immediately. Quicksilver can grab the current selection from almost any application. Grab selected text to search for it on the web or append it to a file. Grab files and delete them, move them or send them. Grab pictures to resize them or change their format (above), the options are limitless.
							</div>
							<div class="section" id="section7">
								<img class="Screenshot" src="images/why_files.png" title="Manage files" alt="Copy a file using Quicksilver"/>
								<h2>Keep Finder at arm's length</h2>
								Quicksilver allows you to do all sorts of things with files: move, copy, rename, delete, whilst also letting you navigate your entire file system. Just add a few important top-level folders to the catalog and you can browse through your folders from there.
							</div>
							<div class="section" id="section8">
								<img class="Bordered-Screenshot" style="margin-top:40px;margin-bottom:30px" src="images/why_triggers.png" title="Configure triggers" alt="Triggers: keyboard shortcuts in Quicksilver"/>
								<h2>Still not fast enough?</h2>
								If you find yourself doing something frequently, you can <strong>speed up the task</strong> even further by assigning a "trigger" to it. Triggers give you the power to assign regular tasks to keyboard shortcuts or mouse movements; you don't even need to activate Quicksilver.
							</div>
							<div class="section" id="section9">
								<img class="Bordered-Screenshot" style="margin-bottom:20px" src="images/why_plug-ins.png" title="Add functionality" alt="Extend Quicksilver with plugins"/>
					 			<h2>Extend Quicksilver &amp; do more</h2>
								There are <a href="http://qsapp.com/wiki/Plugin_Reference">many plug-ins</a> that extend Quicksilver's functionality even further. Interact with your installed applications; Mail, 1Password, Microsoft Office and more. Access information from web-based services. Access your browser's bookmarks and history.<br>
								<br>
								Check out the 'Plugins' section within the Quicksilver preferences to see the all the entire plugins list; containing over 100 plugins.
							</div>
							<div class="section" id="section10">
								<img width="340px" class="Sreenshot" src="images/Quicksilver_Nostromo.png" title="Nostromo Interface" alt="Nostromo Interface for Quicksilver"/>
								<img style="width:300px" class="Sreenshot" src="images/Quicksilver_Primer.png" title="Primer Interface" alt="Primer Interface for Quicksilver"/>
								<img style="width:200px;margin:-50px 0 0 40px;" class="Sreenshot" src="images/Quicksilver_Window.png" title="Window Interface" alt="Window Interface for Quicksilver"/>
								<img style="width:250px;margin:0 0 0 20px" class="Sreenshot" src="images/Quicksilver_BezelHUD.png" title="BezelHUD Interface" alt="BezelHUD Interface for Quicksilver"/>
								<h2>Numerous Interfaces</h2>
								Customise Quicksilver with one of the many interface plugins, or alter the colours, bezels and font sizes.
							</div>
						</div>
					</div>
					<div class="controls">
						<a href="#section1" id="control1" class="active"></a>
						<a href="#section2" id="control2"></a>
						<a href="#section3" id="control3"></a>
						<a href="#section4" id="control4"></a>
						<a href="#section5" id="control5"></a>
						<a href="#section6" id="control6"></a>
						<a href="#section7" id="control7"></a>
						<a href="#section8" id="control8"></a>
						<a href="#section9" id="control9"></a>
						<a href="#section10" id="control10"></a>
					</div>
				</section>
				<div class="Page-Break"></div>
				<section class="Feature">
					<h2>What about Spotlight?</h2>
					<a name="spotlight"></a>
					Spotlight is fantastic and it certainly has its place, but it's no substitute for Quicksilver.
					<ul> 
						<li>Spotlight knows about <b>everything</b> on your Mac. Quicksilver also knows about everything, but concentrates on the things you care about.</li> 
						<li>Spotlight is about finding things. Quicksilver is about finding things (faster) then <em>doing something</em> with what you've found.</li> 
						<li>Spotlight can show your dad's entry in the Address Book. Quicksilver can show your dad's work phone number, call it or send your dad a file.</li> 
						<li>Spotlight forces you to think as you search. Quicksilver allows you to just start typing to get what you want.</li> 
					</ul>
				</section>
				<div class="Page-Break"></div>
				<section class="Feature">
					<h2>Words from the Web</h2>
					<p>
						<blockquote class="quote">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Quicksilver is like carrying a light-saber and throwing robots across the room with your mind&rdquo;,</blockquote>
						<span style="text-align:right; margin-top:10px; display: block;">Anonymous</span>
					</p>
					<p>
						<blockquote class="quote">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Quicksilver allows me to do near superhuman things with files and applications. It makes me a frakkin Ninja and my Mac a Ginsu Knife&rdquo;.</blockquote>
						<span style="text-align:right; margin-top:10px; display: block;"><a href="https://minimalmac.com/post/4717549078/quicksilver-mac-os-x-at-your">Patrick Rhone</a>, Minimal Mac</span>
					</p>
				</section>
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