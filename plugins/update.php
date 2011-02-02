<?php

include('functions.php');

class Plugins {
	var $pluginsDir = 'plugins';
	var $pluginsList;
	var $pluginsCount = -1;

	function getPluginsList() {

		$this->pluginsList = array();

		// Open the directory
		if ($handle = opendir($this->pluginsDir)) {
			// Read all file from the directory
			while (false !== ($file = readdir($handle))) {
				if (!is_dir($file)) 
				{
					if(!((pathinfo($file, PATHINFO_EXTENSION) == "bak")))
					{
						$this->pluginsList[] = $file;
					}
				}
			}
		}

		rsort($this->pluginsList);

		closedir($this->pluginsDir);

		return $this->pluginsList;
	}

	function updatePlugins() {

		connect_db();

		$list = $this->getPluginsList();

		// Delete anything lingering in the database
		mysql_query("TRUNCATE TABLE plugins");

		foreach (array_slice($list,0,999) as $fileNames) {
			$this->parseFilename($fileNames);
		}
		close_db();
		echo 'Success!';
	}

	function parseFilename($fileNames){

		// Split the file name into the 3 parts - name, vers., mod date
		$parts = explode("__", $fileNames);

		$image = "images/".$parts[0].".png";

		// replace the _ in the plugin name with a space
		$plugin_name = str_replace("_", " ", $parts[0]);

		// replace the _ in the version witha point
		$vers = str_replace("_", ".", $parts[1]);

		// remove the .zip from the mod date and replace _ with /
		$mod  = substr($parts[2], 0 , -4);
		$mod = str_replace("_", "-", $mod);	

		$full_path = "plugins/".$fileNames;

		$sql = "INSERT INTO plugins (image, name, version, moddate, fullpath) VALUES ('$image', '$plugin_name', '$vers', '$mod', '$full_path' ) ";
		if (!mysql_query($sql))
		{
			die('Error: ' . mysql_error());
		}

	}
}
$pluginsHandler = new Plugins();
?>
<html>
<head>
	<meta http-equiv="refresh" content="2;url=index.php">
	</head>
	<body>
<?php $pluginsHandler->updatePlugins(); ?>
</body></html>