<?php

include('../lib/functions.php');

$sql = "SELECT DISTINCT 'version' FROM" . STATS_TABLE;
$versions = fetch_db($sql);

$i = 1;
foreach ($versions as $version) {
	if ($i = 1) {}
	$sql = "SELECT 'DATE', 'version' FROM" . STATS_TABLE . "WHERE version = \"" . $versions ."ORDER BY " . STATS_TABLE . ".`date` ASC";
	$versionstats = fetch_db($qsl);
	$array = $versionstats->
	}
}

?>