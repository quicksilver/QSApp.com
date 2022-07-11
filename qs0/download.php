<?php
/* !! DO NOT DELETE THIS FILE !! 
blacktree.com links here. We must forward the requests to the new downloads page */

header( 'Location: https://qs0.qsapp.com/plugins/download.php');	



/*	// This gets the latest version we have on GitHub from version.php. It can be any format - e.g. in the future it could be 6.1.0	
	include('version.php');
	
	include('lib/functions.php');
	
	
	if(isset($_GET['version'])) {
		// The QSApp.com download page has a link such as http://qsapp.com/download.php?version=SomeVersion
		$version = $_GET['version'];
	}
	else {
		// This is the case for clicks from Blacktree.com. It links to the 'latest' at http://qsapp.com/download.php
		$version = $latest;
	}
	connect_db();
	
	// Stick version info in the database. It can be viewed with PHPmyAdmin.
	// *** TO DO: Make a pretty interface/graphs for seeing this
		mysqli_query("INSERT INTO download (Version, Download_Count) VALUES ('$version', 1) ON duplicate key UPDATE Download_Count = Download_Count+1");
	
	close_db();

// Redirect to the GitHub page. **Warning - the download MUST be in the format Quicksilver VERSIONNUMBER.dmg
if($version = "B64") {
$url = 'http://cloud.github.com/downloads/quicksilver/Quicksilver/Quicksilver_'.$version.'.dmg';
}
else {
	$url = 'http://cloud.github.com/downloads/quicksilver/Quicksilver/Quicksilver%20'.$version.'.dmg';
}
   header( 'Location: '.$url ) ;
*/

?>