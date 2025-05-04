<?php
// Gracoiusly taken from https://www.thefutureoftheweb.com/blog/use-accept-language-header.
// Thank you :)

//  If it's the full list they're after, give them that
if($_GET['type'] == "full")
{
	header( 'Location: https://qs0.qsapp.com/plugin-data/web-search-list-full.html' ) ;
}
	$langs = array();

// Otherwise, check their OS language and return a list for their country
if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {


    // break up string into pieces (languages and q factors)
    preg_match_all('/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/i', $_SERVER['HTTP_ACCEPT_LANGUAGE'], $lang_parse);

    if (count($lang_parse[1])) {
        // create a list like "en" => 0.8
        $langs = array_combine($lang_parse[1], $lang_parse[4]);
    	
        // set default to 1 for any without q factor
        foreach ($langs as $lang => $val) {
            if ($val === '') $langs[$lang] = 1;
        }

        // sort list based on value	
        arsort($langs, SORT_NUMERIC);
    }
}

// default to US searches
$country = "US"; // For showing in the name e.g. Google US
$tld = "com"; // For the actual domain e.g. google.com
$langvar = "en"; // For sites like wikipedia e.g. en.wikipedia.org and Google Translate

// look through sorted list and use first one that matches our languages
foreach ($langs as $lang => $val) {
	if (strpos($lang, 'en-gb') === 0 || strpos(strtolower($lang), 'cy') === 0 || strpos(strtolower($lang), 'cy-gb') === 0) {
		// show UK searches
		$country = "UK";
		$tld = "co.uk";
		$langvar = "en";
			} else if (strpos($lang, 'de') === 0) {
		// Deutsch
		$country = "DE";
		$tld = "de";
		$langvar = "de";
		} else if (strpos($lang, 'fr') === 0) {
			// Français
		$country = "FR";
		$tld = "fr";
		$langvar = "fr";		
		} else if (strpos($lang, 'es') === 0) {
			// Espangol
			$country = "ES";
			$tld = "es";
			$langvar = "es";
		} else if (strpos($lang, 'el') === 0) {
			// Ελληνικά
			$country = "GR";
			$tld = "gr";
			$langvar = "el";
		} else if (strpos($lang, 'ja') === 0) {
			// Nihon
			$country = "JP";
			$tld = "co.jp";
			$langvar = "ja";
		} else if (strpos($lang, 'it') === 0) {
			// Italiano
			$country = "IT";
			$tld = "it";
			$langvar = "it";
		} else if (Strpos($lang, 'pt') === 0) {
			// Português
			$country = "PT";
			$tld = "pt";
			$langvar = "pt";
		} else if(strpos($lang, 'ru') === 0) {
			// русский язык
			$country = "RU";
			$tld = "ru";
			$langvar = "ru";
		}
}

echo ' <div class="QSWebSearchContentStart"></div>
        <h2 id="google">
            Google
        </h2>
        <ul>
            <li>
                <a href="qss-https://www.google.'.$tld.'/search?q=***&ie=UTF-8&oe=UTF-8">Google ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://mail.google.com/mail/#search/***">Gmail</a>
            </li>
            <li>
                <a href="qss-https://maps.google.'.$tld.'/maps?q=***">Google Maps ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://news.google.'.$tld.'/news?hl=en&amp;q=***">Google News ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://books.google.'.$tld.'/books?q=***">Google Books ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://images.google.'.$tld.'/images?hl=en&amp;q=***">Google Image ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://scholar.google.'.$tld.'/scholar?hl=en&amp;q=***">Google Scholar</a>
            </li>

        </ul>
	<ul>
		<li>
			<a href="qss-https://maps.apple.com/?q=***">Apple Maps</a>
		</li>
	</ul>
        <h2 id="other-search-engines">
            Other Search Engines
        </h2>
        <ul>
            <li>
                <a href="qss-https://www.bing.com/search?q=***&cc='.strtolower($country).'">Bing ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://'.strtolower($country).'.search.yahoo.com/search;_ylt=A0oGkzSwTbtNLNYAMyRKBQx.;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA3lmcC10LTcwMgRuX2dwcwMwBG9yaWdpbgNzeWMEcXVlcnkDKioqBHNhbwMw?p=***&fr=yfp-t-702&fr2=sfp&iscqry=">Yahoo ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://www.wolframalpha.com/input/?i=***">Wolfram|Alpha</a>
            </li>
        </ul>
        <h2 id="social">
            Social
        </h2>
        <ul>
            <li>
                <a href="qss-https://twitter.com/?lang='.$langvar.'#!/search/***">Twitter</a>
            </li>
            <li>
                <a href="qss-https://hs.facebook.com/s.php?q=***&amp;n=-1">Facebook</a>
            </li>
        </ul>
   
        <h3 id="video">
            Video
        </h3>
        <ul>
            <li>
                <a href="qss-https://www.youtube.com/results?gl='.$country.'&hl='.$langvar.'&search_type=search_videos&amp;search_sort=relevance&amp;search_query=***&amp;search=Search">YouTube</a>
            </li>
        </ul>
        <h3 id="images">
            Images
        </h3>
        <ul>
            <li>
                <a href="qss-https://www.flickr.com/photos/search/text:***">Flickr</a>
            </li>
</ul>
        <h3 id="movies">
            Movies
        </h3>
        <ul>
            <li>';
// IMDb only has French, German, Italian, Spanish, Portugese
if($tld == "de" || $tld == "it" || $tld == "es" || $tld == "pt" || $tld == "fr") {
	echo '<a href="qss-https://www.imdb.'.$tld.'/find?q=***">IMDb ('.$country.')</a>';
}
else {
	 echo '<a href="qss-https://www.imdb.com/find?q=***">IMDb</a>';
	}
	echo '
            </li>
            <li>
                <a href="qss-https://www.rottentomatoes.'.$tld.'/search/?search=***&sitesearch=rt">Rotten Tomatoes</a>
            </li>
        </ul>
        <h3 id="music">
            Music
        </h3>
        <ul>
            <li>
                <a href="qss-https://www.last.fm/search?q=***&form=ac&setlang='.$langvar.'">Last.FM</a>
            </li>
        </ul>
        <h2 id="mac">
            Mac
        </h2>
        <ul>
            <li>
                <a href="https://stackoverflow.com/search?q=***">Stack Overflow</a>
            </li>
            <li>
                <a href="qss-https://hints.macworld.com/search.php?query=***&type=stories&mode=search&keyType=all">Mac OS X Hints</a>
            </li>
            <li>
                <a href="qss-https://www.macupdate.com/search/advanced/?qk=***&modpreset=&mm=2003-01&mx=2012-07&title=&titlenot=&desc=&descnot=&dev=&devnot=&os=mac&rating=all">MacUpdate</a>
            </li>
        </ul>
        <h2 id="reference">
            Reference
        </h2>
        <ul>
            <li>
                <a href="qss-https://'.$langvar.'.wikipedia.org/wiki/Special:Search?search=***&amp;go=Gon">Wikipedia</a>
            </li>
<li>
<a href="qss-https://'.$langvar.'.wiktionary.org/wiki/Special:Search?search=***&go=Go">Wiktionary</a>
</li>
        </ul>
        <h2 id="shopping">
            Shopping
        </h2>
        <ul>

            <li>
                <a href="qss-https://www.amazon.'.$tld.'/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=***">Amazon ('.$country.')</a>
            </li>
            <li>
                <a href="qss-https://search.ebay.'.$tld.'/search/search.dll?query=***">eBay ('.$country.')</a>
            </li>
        </ul>
       '; /* <h2 id="weather">
            Weather
        </h2>
        <ul>
            <li>';
if($langvar == "es") {
	echo '<a href="qss-https://espanol.weather.com/search?searchSourceType=1&locationId=&localeCode=es_US&sourcePageId=1&searchText=***&rdoWebWeather=Weather">Weather (ES)</a>';
}
else if($country == "FR" || $country == "UK" || $country == "DE" || $country == "IT") {
	echo '<a href="qss-https://'.strtolower($country).'.weather.com/search?rdoWebWeather=Weather&searchText=***&searchSourceType=1&sourcePageId=1&localeCode=fr_FR&searchType=0&locationId=+">Weather ('.$country.')</a>';
	https://uk.weather.com/search?searchSourceType=1&locationId=&localeCode=en_GB&sourcePageId=1&searchText=ll60+6hb&rdoWebWeather=Weather
}
else {
	echo '<a href="https://www.weather.com/search/enhancedlocalsearch?where=***&loctypes=1003%2C1001%2C1000%2C1%2C9%2C5%2C11%2C13%2C19%2C20&from=hdr_localsearch">Weather</a>';
}
 echo '</ul> */
echo '
        <h2 id="web-services">
            Web Services
        </h2>
        <ul>
<li>
   <a href="qss-https://bit.ly/?u=***">Shorten URL (Bit.ly)</a>
</li>
            <li>
                <a href="qss-https://64.233.167.104/search?q=cache:***">View URL in Google Cache</a>
            </li>
            <li>
                <a href="qss-https://chat.openai.com/?model=gpt-4&q=***">ChatGPT New Chat</a>
            </li>
        </ul>
        <div class="QSWebSearchContentEnd"></div>';

?>
