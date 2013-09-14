<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
    <head>
  		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta http-equiv="Content-Language" content="en" />
        <meta content="Donate to the Quicksivler Mac OS X project to help ensure the best Mac productivity application remains free forever." name="description" />
        <meta name="Keywords" content="quicksilver, mac, os x, productivity, application, launcher, itunes, paypal, donate, flattr, open source" />
        <title>Quicksilver &#151; Donate</title>

<script type="text/javascript" src="/js/stumper.js"></script>

<script type="text/javascript">
/* <![CDATA[ */
    (function() {
        var s = document.createElement('script'), t = document.getElementsByTagName('script')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'http://api.flattr.com/js/0.6/load.js?mode=auto';
        t.parentNode.insertBefore(s, t);
    })();
/* ]]> */
</script>

<!-- For the donate button (from Flattr) Please email us as devs [at] qsapp [dot] com if this breaches terms -->
<style type="text/css">
.donateBtn {
	top: -6px;
	position: relative;
	background-image: url(https://flattr.com/_img/fluff/bg-boxlinks-green.png);
	margin:0 0 0 20px;
	text-decoration:none;
    border-radius: 3px;
    border: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
	text-align: center;
	display: inline;
	height: 15px;
	line-height: 14px;
	width: 50px;
    color: #fff;
	text-shadow: #666 0px 1px 1px;
    font-size: 12px;
    font-weight: bold;
	padding: 3px 6px;
}
.donateBtn:hover {
	background-image: url(https://flattr.com/_img/fluff/bg-boxlinks.png);
	text-decoration:none;
}
</style>

		<?php include('template/head.tpl'); ?>

    </head>
    
    <body>
      <div id="Container">
      <?php include('template/logo.tpl'); ?>

		<?php include('template/nav.tpl'); ?>
                
			<div id="Page-Top"></div>
			
            <div id="Page">
                <h1>Donate to Quicksilver</h1>
				<div class="Page-Break"></div>
					<p>
						Quicksilver is an open source project for the Mac,
						 maintained by a <a href="quicksilverproject.php#volunteers">group of volunteers</a>.
						 More information on the project itself is available on the <a href="quicksilverproject.php">Quicksilver Project</a> page.</p>
						<h4>What your donation means?</h4>
						<p>Quicksilver is, and will always remain a <strong>free</strong> application. If you enjoy using Quicksilver, you can help ensure its future by donating towards the project. <br />
							Your donation will mean domain names can be renewed and development licences and books can be purchased.
</p>
<h4>Specific donation</h4>
<p>If you have a specific donation, for example a donation for a certain plugin, user support, or the LoveQuicksilver twitter/blog, then please fill in the '<em>Specify where your donation should go</em>' section on PayPal, or <script type="text/javascript">// <![CDATA[
  stumpIt("donate","","send us an email");
// ]]&gt;</script> stating <em>where</em> you would like your donation to go.</p>
		<div style="margin:30px 0 30px 0;width:50%;float:left">
<div style="margin: auto; text-align: center">
	<img src="/Images/donate/PayPal_Logo.png" style="width:140px" alt="PayPal" /> 
	<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
		<div>
			<input type="hidden" name="cmd" value="_donations" />
			<input type="hidden" name="business" value="donate@qsapp.com" />
			<input type="hidden" name="item_name" value="Quicksilver Software" />
<!-- 			<input type="hidden" name="image_url" value="http" /> -->
			<input type="hidden" name="no_shipping" value="1" />
			<input type="hidden" name="return" value="http://qsapp.com" />
			<input type="hidden" name="cancel_return" value="http://qsapp.com" />
			<input type="hidden" name="cn" value="Specify where your donation should go" />
			<input type="hidden" name="tax" value="0" />
			<select name="amount" style="width: 65px;">
				<option value="5.00">$5</option>
				<option value="10.00">$10</option>
				<option value="15.00">$15</option>
				<option value="20.00" selected="selected">$20</option>
				<option value="25.00">$25</option>
				<option value="30.00">$30</option>
				<option value="50.00">$50</option>
				<option value="">Other</option>
			</select>
			<input type="submit" name="submit" value="Donate" style="margin-left: 5px; margin-top: 8px; width: 115px;" />
		</div>
	</form>
</div></div>


<div style="margin:16px 0 30px 0;float:right;width:50%">
<div style="text-align:center">
<p><img src="/Images/donate/Flattr.png" style="width:140px" alt="Flattr" /></p>
<a class="FlattrButton" style="display:none;" rev="flattr;button:compact;" href="https://flattr.com/profile/QSApp"></a>
<noscript><a href="http://flattr.com/thing/314033/Quicksilver-Mac-App" target="_blank">
<img src="http://api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" /></a></noscript>

 <a href="https://flattr.com/profile/qsapp" class="donateBtn">Donate</a>
</div></div>
				<h3>Other ways to Help</h3>
					
					<p>
						Money isn't the only way in which you can help the Quicksilver Project. <br />
						You can help with:
						<a href="https://www.transifex.net/projects/p/quicksilver/">translation</a>, <a href="/wiki">documention</a>, <a href="http://groups.google.com/group/blacktree-quicksilver/topics?gvc=2">user support</a>, <a href="/wiki/Developer_Information">coding</a> or by simply just spreading the word.
					</p>
				
            </div> <!-- Page -->

			<div id="Page-Bottom"></div>
			
		<?php include('template/footer.tpl'); ?>
        </div> <!-- Container -->
    </body>
</html>