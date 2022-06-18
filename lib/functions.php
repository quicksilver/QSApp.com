<?php

require __DIR__ . '/vendor/autoload.php';
require_once "autoload.php";
require_once "plugin.class.php";

define("QS_ID", "com.blacktree.Quicksilver");
define("DARWIN_OSX", serialize(array("9.0" => 100500,
"9.8.0" => 100508,
"10.0.0" => 100600,
"10.8.0" => 100608,
"11.0.0" => 100700,
"11.4.0" => 100704,
"11.4.2" => 100705,
"12.0.0" => 100800,
"12.3.0" => 100802,
"12.4.0" => 100804,
"12.6.0" => 100806,
"13.0.0" => 100900,
"13.4.0" => 100904,
"14.0.0" => 101000,
"14.1.0" => 101000,
"14.3.0" => 101000,
"15.0.0" => 101100
)));
/** DB */
function connect_db() {
    static $db = null;
    if (!$db) {
        include('mysql.php');

        $db = mysqli_connect ($host, $user, $pwd);
        if (!$db) {
            error('Could not connect');
            return false;
        }

        if (!mysqli_select_db($database, $db)) {
            error('Could not select');
            return false;
        }
    }
    return $db;
}

function close_db() {
    return mysqli_close(connect_db());
}

function quote_db($obj) {
    if ($obj === null)
        return "NULL";
    if (is_string($obj)) {
        if ($obj == "NULL")
            return $obj;
        if ($obj == "")
            return "\"\"";
        connect_db();
        return '"' . mysqli_real_escape_string($obj) . '"';
    } else if (is_bool($obj)) {
        return $obj ? 1 : 0;
    } else {
        return $obj;
    }
}

function query_db($query) {
    connect_db();

    $res = mysqli_query($query);
    if (!$res) {
        error('Could not execute: ' . mysqli_error());
        return null;
    }
    return $res;
}

function fetch_db($query) {
    $res = query_db($query);
    if (!$res)
        return null;

    $recs = array();
    while($rec = mysqli_fetch_assoc($res)) {
        $recs[] = $rec;
    }
    mysqli_free_result($res);
    return $recs;
}

/** Logging */

function puts($str = null) {
    if ($str !== null)
        echo $str . "<br />\n";
}

define("LGLVL_DEBUG", E_USER_NOTICE);
define("LGLVL_ERROR", E_USER_ERROR);

$current_level = LGLVL_ERROR;
//$current_level = LGLVL_DEBUG;

function log_level() {
    global $current_level;
    return $current_level;
}

function set_log_level($level) {
    global $current_level;
    $current_level = $level;
}

function qslog($level, $str) {
    if ($level <= log_level()) {
        error_log($str, 0);
    }
}

function debug($str) {
    qslog(LGLVL_DEBUG, $str);
}

function error($str) {
    qslog(LGLVL_ERROR, $str);
}

function http_error($code, $msg) {
    error($msg);
    header("HTTP/ $code $msg");
    die("<h1>$code - $msg</h1>");
}

function dump_str($obj) {
    ob_start();
    var_dump($obj);
    $str = ob_get_clean();
    return $str;
}

function dump($obj) {
    debug(dump_str($obj));
}

/** Utilities */

/*
Get the OS Version from the User Agent string.
FORMATTING FOR USER AGENT STRINGS:
* The standard CFNetwork User Agent
* An old one of the form 'Quicksilver/4008 OSX/10.9.0 (x86)'
* Quicksilver/4026 (Macintosh; Intel Mac OS X 10_16_0; en-us)
* The current format (Nov 2013) of Quicksilver/4008 (Macintosh; Intel macOS 10_9_0; cy-gb) (like Safari)

This function sniffs the $_SERVER user agent string testing these 3 types and returning a suitable OS
*/

function osVersionFromUserAgent($user_agent) {
    $os_version = null;
    if (preg_match_all("/.*OSX\/(\d{1,})\.(\d{1,})\.(\d{1,}).*/", $user_agent, $version_parts)) {
        // Old User Agent format
        $os_version = $version_parts[1][0] . str_pad ($version_parts[2][0] , 2, "0", STR_PAD_LEFT)
            . str_pad ($version_parts[3][0], 2, "0", STR_PAD_LEFT);
        debug("macOS Version, old user agent: " . $os_version);
    } else if (preg_match_all("/.*macOS (\d{1,})_(\d{1,})_(\d{1,}).*/", $user_agent, $version_parts)) {
        // New User Agent format (reflects Safari UA). See GH#1699
        $os_version = $version_parts[1][0] . str_pad ($version_parts[2][0] , 2, "0", STR_PAD_LEFT)  . str_pad ($version_parts[3][0], 2, "0", STR_PAD_LEFT);
        debug("macOS Version, new user agent string: " . $os_version);
    } else if (preg_match_all("/.*Mac OS X (\d{1,})_(\d{1,})_(\d{1,}).*/", $user_agent, $version_parts)) {
        // See GH#2602
        $os_version = $version_parts[1][0] . str_pad ($version_parts[2][0] , 2, "0", STR_PAD_LEFT)  . str_pad ($version_parts[3][0], 2, "0", STR_PAD_LEFT);
        debug("macOS Version, new user agent string: " . $os_version);
    } else if (preg_match_all("/.*Darwin\/(\d{1,}\.\d{1,}(=?\.\d{1,})?).*/", $user_agent, $darwin_version)) {
        // CFNetwork User Agent
        $darwin_version = $darwin_version[1][0];
        $darwin_osx = unserialize(DARWIN_OSX);
        if (!array_key_exists($darwin_version, $darwin_osx)) {
            // The key doesn't exist in DARWIN_OSX. Try and figure out what version of Darwin (and hence macOS) is being used
            $parts = explode(".", $darwin_version);
            if (sizeof($parts) == 3) {
                if ($parts[2] == "0") {
                    $darwin_version = $parts[0] . "." . $parts[1];
                } else {
                    $darwin_version = $parts[0] . "." . $parts[1] . ".0";
                }
            } else if (sizeof($parts) == 2) {
                $dar = $darwin_version . ".0";
            }
            $os_version = $darwin_osx[$darwin_version];
        }
        debug("Darwin version: ". $darwin_version . "\nmacOS version: " . $os_version);
    }
    return $os_version;
}

/* This function turns something like 10.7.0 into 100700 */
function collapse_version($version) {
  $new_ver = "";
  $parts = explode('.', $version);
  if (count($parts) == 2) {
    // version written as 10.9 instead of 10.9.1
    $parts[] = 0;
  }
  foreach ($parts as $p) {
    $new_ver .= sprintf('%02d', $p);
  }
  return $new_ver;
}

/* Does the opposite of expand version
Turns 101401 to 10.14.1, or 11.0.0 to 11 */
function expand_version($version) {
	$major = substr($version, 0, 2);
	$minor = substr($version, 2, 2);
	$bugfix = substr($version, 4, 2);
	if (intval($bugfix) != 0) {
			$new_ver = $major . "." . $minor . "." . $bugfix;
	} else if (intval($minor) != 0) {
			$new_ver = $major . "." . $minor;
	} else {
		$new_ver = $major;
	}
	return $new_ver;
}

/** This function does its best to provide the correct URLs relative
* to the HTTP server's DocRoot. This allow a transparent use when
* developing on the local Apache server.
*
* example:
* web_root("images/my_image.png") => "/mysite/images/my_image.png"
*/
function web_root($file, $__file__ = null) {
    if ($file == null)
        return $file;

    if ($__file__ == null)
        $__file__ = $_SERVER['PHP_SELF'];

    $doc_root = $_SERVER['DOCUMENT_ROOT'];

    // Remove the doc root from the file
    if (strpos($__file__, $doc_root) === 0) {
        $__file__ = substr($__file__, strlen($doc_root), strlen($__file__));
    }

    $self_parts = explode("/", dirname($__file__));
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

/** This function returns the real path to a given file.
* Used to get a correct destination for move_uploaded_file()
* regardless of where the root is located.
*
* example:
* file_root("my_dir") => "/var/www/mysite/my_dir"
*
* BUT IT IS NO GOOD FOR SUBDOMAINS :(
*/
function file_root($file, $__file__ = null) {
    return $_SERVER['DOCUMENT_ROOT'];
}

function glob_file($dir, $glob, $call_glob = true, $__file__ = null) {
    $file_path = file_root($dir, $__file__) . (strrpos($dir, "/") != strlen($dir) ? '/' : '') . $glob;
    if (!$call_glob)
        return $file_path;
    $globs = glob($file_path, GLOB_BRACE);
    if (!$globs || count($globs) != 1)
        return null;
    return $globs[0];
}

function mime_type($file) {
    $type = "application/octet-stream";
    if (function_exists('finfo_open')) {
        $finfo = finfo_open();
        $type = finfo_file($finfo, $file, FILEINFO_MIME);
        finfo_close($finfo);
    } else {
        $last_dot = strrpos($file, ".");
        if ($last_dot) {
            $ext = substr($file, $last_dot, count($file) - $last_dot);
            switch ($ext) {
                case "dmg":
                $type = "application/x-apple-diskimage";
                break;

                case "qspkg":
                $type = "application/x-cpio";
                break;
            }
        }
    }
    return $type;
}

function send_file($file, $name = null) {
    if (strpos($file, "http") === 0) {
        /* HTTP link, redirect… */

        header('Location:' . $file);
        die("You are being redirected...");
    } else if (strpos($file, '/plugins/files/') === 0 && @$USE_CDN) {
        // use a redirect instead of an echo so that the CDN can cache the content
        header('Location: http://cdn.qsapp.com' . $file);
        die("You are being redirected...");
    } else {
        $file_path = file_root($file) . $file;
        $type = mime_type($file_path);
        $size = filesize($file_path);
        debug("sending file \"$file\" ($file_path) with name \"$name\", type: $type,  size: $size");
        header("Content-Type: " . $type);
        header("Content-Length: " . $size);
        if ($name)
            header("Content-Disposition: attachment; filename=\"" . $name . "\"");
        $contents = file_get_contents($file_path);
        if (!$contents)
            return false;
        echo $contents;
        die();
    }
    return true;
}

function hexstring_to_int($string) {
    sscanf($string, "%X", $int);
    return $int;
}

function int_to_hexstring($int) {
    $string = sprintf("%X", $int);
    return $string;
}

/* Temporary */
function outputPlugins()
{

    connect_db();

    $ordervar = @$_GET["order"] ? quote_db(@$_GET["order"]) : "moddate";
    $asc_desc = @$_GET["sort"] ? quote_db(@$_GET["sort"]) : "DESC";

    $result = query_db("SELECT * FROM plugins ORDER BY $ordervar $asc_desc");
    $now = time();
    $i = 0;
    while($row = mysqli_fetch_array($result))
    {
        $moddate_unix = strtotime($row['moddate']);
        $odd = $i % 2 == 1;

        $image_file = file_exists($row['image']) ? $row['image'] : "images/noicon.png";

        echo '<div class="box name' . ($odd ? ' odd' : '') . '" >';
        echo '  <img src="' . $image_file . '" alt="plugin icon" />';
        echo '  <a href="http://qsapp.com/plugins/plugins/' . $row['fullpath'] . '">' . $row['name'] . '</a>';
        if($now - $moddate_unix <= 5184000)
            echo '  <sup><span style="color:#ff0000;" >new!</span></sup>';
        echo '</div>';
        echo '<div class="box version' . ($odd ? ' odd' : '') . '" >' . $row['version'] . ' </div>';
        echo '<div class="box updated' . ($odd ? ' odd' : '') . '" >' . $row['moddate'] . ' </div>';
        //	<div class="box" id="dl"><a href="'.$row['fullpath'].'"><img src="images/download.gif" /></a></div>';
        $i++;
    }
    echo '<p>&nbsp;</p>';

    close_db();

}

?>
