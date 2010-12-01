<?php


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

function outputPlugins()
{
	
	connect_db();
	
$ordervar = $_GET["order"];
$asc_desc = $_GET["sort"];

if(!$ordervar)
		$ordervar = "moddate";
if(!$asc_desc)
	$asc_desc = "ASC";


$result = mysql_query("SELECT * FROM plugins ORDER BY $ordervar $asc_desc");
$i = 0;
while($row = mysql_fetch_array($result))
  {
	$now = time();
	$moddate_unix = strtotime($row['moddate']);
	
	
	
	echo '	<div class="box name';
	if($i%2==1)
	{ echo ' odd"';}
	else
	{ echo '"';}
	echo ' ><img src="';
	if(file_exists($row['image'])) 
		echo $row['image'];
	 else
		echo "images/noicon.png";
	echo '" alt="plugin icon" /><a href="'.$row['fullpath'].'">'.$row['name'].'</a>';
	if($now - $moddate_unix <= 30412800)
		echo ' <sup><span style="color:#ff0000;" >new!</span></sup>';
	
	echo '</div>
	<div class="box version';
	if($i%2==1)
	{ echo ' odd"';}
	else
	{ echo '"';}
	echo ' >'.$row['version'].'</div>
	<div class="box updated';
	if($i%2==1)
	{ echo ' odd"';}
	else
	{ echo '"';}
	echo ' >'.$row['moddate'].'</div>
	
';
//	<div class="box" id="dl"><a href="'.$row['fullpath'].'"><img src="images/download.gif" /></a></div>';
	$i++;
  }
echo '<p>&nbsp;</p>';
	
	close_db();
	
}

?>