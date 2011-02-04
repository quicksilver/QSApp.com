<?php

/** DB */

function connect_db() {

	include('mysql.php');

	$con = mysql_connect ($host,$user,$pwd);
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db($database, $con);

}

function close_db()
{
	include('mysql.php');

	$con = mysql_connect ($host,$user,$pwd);
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_close($con);

}

function quote_db($obj)
{
	if ($obj == null)
		return "NULL";
	if (is_string($obj)) {
		if ($obj == "NULL")
			return $obj;
		if ($obj == "")
			return "\"\"";
		connect_db();
		return '"' . mysql_real_escape_string($obj) . '"';
	} else {
		return $obj;
	}
}

function query_db($query)
{
	connect_db();

	$res = mysql_query($query);
	if (!$res) {
		die('Could not execute: ' . mysql_error());
		return null;
	}
	return $res;
}

function fetch_db($query) {
	$res = query_db($query);
	if (!$res)
		return null;

	$recs = array();
	while($rec = mysql_fetch_assoc($res)) {
		$recs[] = $rec;
	}
	mysql_free_result($res);
	return $recs;
}

/** Logging */

function puts($str) {
	echo $str . "<br />\n";
}

function debug($str) {
	puts($str);
}

function error($str) {
	die($str);
}

function dump($obj) {
	ob_start();
	var_dump($obj);
	$str = ob_get_clean();
	debug($str);
}

/** Utilities */

function webRoot($file) {
    $doc_root = $_SERVER['DOCUMENT_ROOT'];
    $self_parts = explode("/", dirname($_SERVER['PHP_SELF']));
    $file_parts = explode("/", $file);
    $parts = array(""); // Path must always start with a /

    if (strpos($file, $doc_root) === 0) {
        return substr($file, strlen($doc_root), strlen($file));
    }

    foreach ($self_parts as $part) {
        if ($part != $parts[count($parts) - 1])
            $parts[] = $part;
    }
    foreach ($file_parts as $part) {
        if ($part == "")
            continue;
        if ($part == "..") {
            array_pop($parts);
            continue;
        }
        if ($part != $parts[count($parts) - 1])
            $parts[] = $part;
    }
    return implode("/", $parts);
}

function fileRoot($file) {
	return $_SERVER['DOCUMENT_ROOT'] . webRoot($file);
}

function outputPlugins()
{

	connect_db();

	$ordervar = quote_db($_GET["order"]);
	$asc_desc = quote_db($_GET["sort"]);

	if(!$ordervar)
		$ordervar = "moddate";
	if(!$asc_desc)
		$asc_desc = "ASC";


	$result = query_db("SELECT * FROM plugins ORDER BY $ordervar $asc_desc");
	$now = time();
	$i = 0;
	while($row = mysql_fetch_array($result))
	{
		$moddate_unix = strtotime($row['moddate']);
		$odd = $i % 2 == 1;

		$image_file = file_exists($row['image']) ? $row['image'] : "images/noicon.png";

		echo '<div class="box name"' . ($odd ? ' odd' : '') . '>';
		echo '  <img src="' . $image_file . '" alt="plugin icon" />';
		echo '  <a href="' . $row['fullpath'] . '">' . $row['name'] . '</a>';
		if($now - $moddate_unix <= 30412800)
			echo '  <sup><span style="color:#ff0000;" >new!</span></sup>';
		echo '</div>';
		echo '<div class="box version"' . ($odd ? ' odd' : '') . '>' . $row['version'] . '</div>';
		echo '<div class="box updated"' . ($odd ? ' odd' : '') . '>' . $row['moddate'] . '</div>';
		//	<div class="box" id="dl"><a href="'.$row['fullpath'].'"><img src="images/download.gif" /></a></div>';
		$i++;
	}
	echo '<p>&nbsp;</p>';

	close_db();

}

?>