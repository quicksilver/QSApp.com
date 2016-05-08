<?php
/* Created by Patrick Robertson 01/02/2012
This script runs periodically (Cron) to store a historical account of the download stats for QS */

include('functions.php');

$sql = "SELECT * FROM " . PLUGIN_TABLE . " WHERE " . PLUGIN_IDENTIFIER ." = \"com.blacktree.Quicksilver\"";

$versions = fetch_db($sql);

foreach ($versions as $version) {
	 $insert_sql = "INSERT INTO " . STATS_TABLE . " (version, downloads) VALUES (" . $version['version'] . ", " . $version['downloads'] . ");";
	 // echo $insert_sql;
	if (!query_db($insert_sql)) {
       error("Failed executing SQL: \"$insert_sql\"");
       return false;
     }
}
?>