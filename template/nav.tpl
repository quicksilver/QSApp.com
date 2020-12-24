<?php $items = array(
		array("link"=>"/index.php", "label"=>"Home"), 
		array("link"=>"/about.php", "label"=>"About"),
		array("link"=>"/download.php", "label"=>"Download"), 
		array("link"=>"/donate.php", "label"=>"Donate"),
		array("link"=>"/plugins.php", "label"=>"Plugins"),
		array("link"=>"/support.php", "label"=>"Support"),
		array("link"=>"http://twitter.com/lovequicksilver", "label"=>"Twitter"),
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
	
	foreach ($items as $val) {
		$menu .= '
			<li><a href="'.$val['link'].'" ';
		if($scriptName == $val['link']) {
			$menu .= 'class="On"';
		}
		$menu .= '>'.$val['label'].'</a></li>';
	}
	$menu .='
		</ul>
	</nav>';
	echo $menu;
?>