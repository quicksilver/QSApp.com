<?php

	include('lib/functions.php');
	
	connect_db();
	$latest  = "B60";
	
		mysql_query("INSERT INTO download (Version, Download_Count) VALUES ('$latest', 1) ON duplicate key UPDATE Download_Count = Download_Count+1");
	
	close_db();

   header( 'Location: http://cloud.github.com/downloads/quicksilver/Quicksilver/Quicksilver%20'.$latest.'.dmg' ) ;

?>