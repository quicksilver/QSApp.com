<?php
include('../lib/functions.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <title>Quicksilver Plugin Repository</title>
  <!-- Date: 2010-04-04 -->
  <link href="../default.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20964503-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    </script>
  </head>
  <body>
    <center>
      <img src="../images/quicksilver.png" width="64px" height="64px" alt="QS logo" /><br/>
      <h3><img src="../images/quicksilver-title.png" width="160px" height="31px" alt="Quicksilver" /></h3>
      <p style="color:#151515;font-size:20pt;margin-top:-10px;	font-variant: small-caps;">Plugins Repository</p>
      <div class="opener">
        <p>Below, you'll find a list of the latest Quicksilver plugins available.<br />
          This list is compiled from sources all over the web, and should have the most recent plugins that work with Mac OS X 10.5 and 10.6.<br />
          I'll try and keep this list as up to date as I can, so it can be the new one-stop-shop for plugins.<br />
          Please email me at plugins@qsapp.com if you know of any more missing plugins.<br/>
          <br/>
          <br />
          Sort through the plugins by either <strong>name</strong> or <strong>updated date</strong>
        </p>
      </div>
    </center>
    <div id="main">
      <div class="box head name"><a href="?order=name&amp;sort=<?php if(@$_GET["sort"]=="DESC") echo "ASC"; else echo "DESC";?>">Plugin</a></div>
      <div class="box head version">Vers.</div>
      <div class="box head updated"><a href="?order=moddate&amp;sort=<?php if(@$_GET["sort"]=="DESC") echo "ASC"; else echo "DESC";?>">Updated</a></div>
      <!--	<div class="box head" id="dl">Download</div> -->
      <?php outputPlugins(); ?>
    </div>
    <center>
      <p style="color:#d1d1d1;font-size:8pt;">List compiled by &copy; Patrick Robertson, <?php echo date('Y'); ?><br />
        Some styles and images taken from the <a style="color:#d1d1d1" href="http://blacktree.com">http://blacktree.com</a>. I hope you don't mind Alcor &lt;3
      </p>
    </center>
  </body>
</html>