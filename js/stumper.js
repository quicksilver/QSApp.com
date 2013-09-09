function stumpIt(theName,theExtras,theLink) {
var theDomain ="qsapp.com";
var theEmail = theName+"@"+theDomain;
if (theName == ""){
	theName = "ERROR";
	theLink = "ERROR";
	myEmail = theName;
	myLink = theLink;
}else{
	if ((theExtras == "") && (theLink =="")){
		myEmail = theEmail;
		myLink = theEmail;
	}
	if ((theLink == "") && (theExtras != "")){
		myLink = theEmail;
		myEmail = theEmail+theExtras;
	}
	if 	((theLink != "") && (theExtras != "")){
		myLink = theLink;
		myEmail = theEmail+theExtras;
	}
	if 	((theLink != "") && (theExtras == "")){
		myLink = theLink;
		myEmail = theEmail;
	}
}
	document.write('<a href=mailto:' + myEmail + '>' + myLink + '</a>');
}