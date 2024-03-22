<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="description" content="Donate to the Quicksivler macOS project to help ensure the best Mac productivity application remains free forever." />
		<meta name="keywords" content="quicksilver, mac, os x, macOS, productivity, application, launcher, itunes, paypal, donate, flattr, open source" />
		<title>Quicksilver &#151; Donate</title>
		<?php include('template/head.tpl'); ?>
	</head>
	<body>
		<div id="Container">
			<?php include('template/logo.tpl'); ?>
			<?php include('template/nav.tpl'); ?>	
			<div id="Page-Top"></div>
			<main id="Page">
				<h1>Support Quicksilver</h1>
				<div class="Page-Break"></div>
				<p>Quicksilver is an open source project for the Mac, maintained by a <a href="quicksilverproject.php#volunteers">group of volunteers</a>. More information on the project itself is available on the <a href="quicksilverproject.php">Quicksilver Project</a> page.</p>
				<h4>What your donation means?</h4>
				<p>Quicksilver is, and will always remain a <strong>free</strong> application. If you enjoy using Quicksilver, you can help ensure its future by donating towards the project. <br>
				Your donation will mean domain names can be renewed and development licences and books can be purchased.</p>
				<h4>Specific donation</h4>
				<p>If you have a specific donation, for example a donation for a certain plugin, user support, or the LoveQuicksilver twitter/blog, then please fill in the '<em>Specify where your donation should go</em>' section on PayPal, or <script type="text/javascript">// <![CDATA[
				stumpIt("donate","","send us an email");
				// ]]&gt;</script> stating <em>where</em> you would like your donation to go.</p>
				<div class="clear"></div>
				<div style="margin:30px aut 30px auto;width:50%;max-width:300px;">
					<div style="margin: auto; text-align: center">
						<img src="/images/donate/PayPal_Logo.png" style="width:140px" alt="PayPal" /> 
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
							<div>
								<input type="hidden" name="cmd" value="_donations" />
								<input type="hidden" name="business" value="donate@qsapp.com" />
								<input type="hidden" name="item_name" value="Quicksilver Software" />
								<!-- <input type="hidden" name="image_url" value="http" /> -->
								<input type="hidden" name="no_shipping" value="1" />
								<input type="hidden" name="return" value="http://qsapp.com/donate-confirm.php" />
								<input type="hidden" name="cancel_return" value="http://qsapp.com/donate-cancel.php" />
								<input type="hidden" name="currency_code" value="USD">
								<input type="hidden" name="cpp_header_image" value="https://qsapp.com/images/quicksilver-icon.png">
								<input type="hidden" name="cn" value="Specify where your donation should go" />
								<input type="hidden" name="tax" value="0" />
								<select name="amount" style="width: 65px;">
									<option value="10.00">$10</option>
									<option value="20.00">$20</option>
									<option value="30.00" selected="selected">$30</option>
									<option value="50.00">$50</option>
									<option value="">Other</option>
								</select>
								<input type="submit" name="submit" value="Donate" style="margin-left: 5px; margin-top: 8px; width: 115px;" />
							</div>
						</form>
					</div>
				</div>
				<div class="clear"></div>
				<h3>Other ways to Help</h3>
				<p>Other than financial donations, the Quicksilver project requires help with the following projects and tasks:</p>
				<ul>
					<li>Translating Quicksilver into your local language. Join the <a href="https://www.transifex.com/projects/p/quicksilver/">Quicksilver Transifex project</a> to get started translating.</li>
					<li>Help improve Quicksilver's documentation. Add information to the <a href="/wiki">Quicksilver Wiki</a>, create YouTube screencasts and videos, or <a href="https://github.com/quicksilver/Quicksilver/issues">submit an issue on Github</a> outlining areas we can improve Quicksilver documentation.</li>
					<li>Website upkeep. Website design work, and content creation and updating. Submit a post titled 'Website Volunteering' to the <a href="https://groups.google.com/g/quicksilver---development">Quicksilver Developer Community</a> to get started.</li>
					<li>App UI improvements. Provide new icons or mockups of areas to improve Quicksilver's UI. Submit a post titled 'Quicksilver UI' to the <a href="https://groups.google.com/g/quicksilver---development">Quicksilver Developer Community</a> to get started.</li>
					<li>Spread the word about Quicksilver using social media. Share how you use Quicksilver on social media, using the tag #quicksilverapp</li>
				</ul>
				<p>For a full rundown of other ways to help Quicksilver, check out the <a href="/volunteer-projects.php">list of outstanding projects</a> you can help out with.</p>
			</main>
			<div id="Page-Bottom"></div>
			<?php include('template/footer.tpl'); ?>
		</div>
	</body>
</html>