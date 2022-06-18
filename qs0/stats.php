<?php

include('../lib/functions.php');

$sql = "SELECT DISTINCT version FROM " . STATS_TABLE;
$versions = fetch_db($sql);
foreach ($versions as $version) {
	$sql = "SELECT date, version, downloads FROM " . STATS_TABLE . " WHERE version = \"" . $version['version'] ."\" ORDER BY " . STATS_TABLE . ".`date` ASC;";
	$versionstats = fetch_db($sql);
	foreach ($versionstats as $v){
		echo $v['date'].",".$v['version'].",".$v['downloads']."\n";
	}
}
