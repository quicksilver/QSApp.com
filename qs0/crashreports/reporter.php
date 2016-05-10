<?php
include("../../lib/functions.php");
$useragent = $_SERVER['HTTP_USER_AGENT'];


// Make sure that Quicksilver is the user agent
if (substr($useragent, 0, strlen('Quicksilver')) === "Quicksilver") {
	
	$criteria[PLUGIN_LEVEL] = LEVEL_NORMAL;
	$plugin = Plugin::get(PLUGIN_IDENTIFIER, QS_ID, $criteria);
	
	preg_match('/Quicksilver\/([0-9A-Fa-f]+).*/', $useragent, $results);
	// Only store crash reports for the latest version of QS
	if(hexdec($results[1]) < $plugin->version) {
		return;
	}
	
	$crashlogname  = $_POST['name'];
	$filepath = "reports/";
	
	// for a plugin crash, save the file to the plugins folder
	if(substr($crashlogname, 0, strlen('Plugin')) === "Plugin") {
		$filepath = $filepath."Plugins/";
		// otherwise save the crash log to a specific folder for the QS version
	} else if($results[1]){
		$filepath = $filepath.$results[1]."/";
		if(!is_dir($filepath)) {
			mkdir($filepath);
		}
	}

	// make sure the extension is .crash
	if (pathinfo($crashlogname, PATHINFO_EXTENSION) === "crash") {

		// ensure the file name will not contain any unwanted chars to another directory
		$crashlogname = str_replace("./", "", $_POST['name']);
		$crashlogname = str_replace("/", "", $crashlogname);
		$crashlogname = str_replace("..", ".", $crashlogname);
		$crashlogname = str_replace("~", "", $crashlogname);
		$crashlogname = str_replace("$", "", $crashlogname);
		$crashlogname = str_replace("?", "", $crashlogname);
		// we want to place the file in the reports folder
		$file         = $filepath.$crashlogname;

		$fh           = fopen($file, 'w') or die("can't open file");
		$userComments = $_POST['comments'];
		// only add comments if the user entered them
		if ($userComments != "") {
			$userComments = "User Comments:\n\n".$userComments."\n\n\n------------------ CRASH REPORT -----------------\n\n\n";
		}
		$stringData   = $_POST['data'];
		fwrite($fh, $userComments.$stringData);
		fclose($fh);
	}

}
?>
