<?php
	$navbarLinks = array(
		array("url"=>"/index.php", "label"=>"Home", "openInNewTab"=>false), 
		array("url"=>"/about.php", "label"=>"About", "openInNewTab"=>false),
		array("url"=>"/download.php", "label"=>"Download", "openInNewTab"=>false), 
		array("url"=>"/donate.php", "label"=>"Donate", "openInNewTab"=>false),
		array("url"=>"/plugins.php", "label"=>"Plugins", "openInNewTab"=>false),
		array("url"=>"/support.php", "label"=>"Support", "openInNewTab"=>false),
		//array("url"=>"http://twitter.com/lovequicksilver", "label"=>"Twitter", "openInNewTab"=>true),
	);

	$scriptName = $_SERVER['SCRIPT_NAME'];
	// Make the 'on' class be on the 'download' button for the changelog page
	if($scriptName === "/changelog.php") {
		$scriptName = "/download.php";
	} 
	elseif($scriptName === "/quicksilverproject.php") {
		$scriptName = "/about.php";
	}

	$menu = '<nav id="Navigation">
		<ul>';
	
	foreach ($navbarLinks as $link) {
		$menu .= '
			<li><a href="'.$link['url'].'" ';
		if($scriptName == $link['url']) {
			$menu .= 'class="On"';
		}

		if ($link['openInNewTab']) {
			$menu .= ' target="_blank" rel="noopener noreferrer"';
		}
		$menu .= '>'.$link['label'].'</a></li>';
	}
	$menu .='
		</ul>
	</nav>';
	echo $menu;
?>