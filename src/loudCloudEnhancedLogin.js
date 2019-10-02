// inject CSS stylesheet
var style = document.createElement( 'link' );
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL( '/themes/darkTheme/darkThemeLogin.css' );
( document.head || document.documentElement ).appendChild( style );
var logoURL = chrome.extension.getURL( "/themes/logos/logoBlank.png" );

function addFooter() {
	var footer = document.createElement( 'span' );
	footer.className = 'buildVersion';
	footer.id = 'enhancedFooter';
	document.getElementsByClassName( 'lc_footerMast lc_wrapperWidth' )[ 0 ].appendChild( footer );
	document.getElementById( 'enhancedFooter' ).textContent = 'LoudCloud Enhanced by jadedkitty  [Ver: 1.1]';
	var github = document.createElement( 'a' );
	github.id = 'githubLink';
	document.getElementsByClassName( 'lc_footerMast lc_wrapperWidth' )[ 0 ].appendChild( github );
	document.getElementById( 'githubLink' ).textContent = '  -->  See <> on GitHub';
	document.getElementById( 'githubLink' ).href = 'https://github.com/jadedkitty/LoudCloud-Enhanced-Extension';
}

function removeElement( elementId ) {
	// Removes an element from the DOM
	var element = document.getElementById( elementId );
	if ( !element ) {
		//node does not exist yet
		//wait 1ms and try again
		window.setTimeout( function() {
			removeElement( elementId );
		}, 1 );
		return;
	}
	element.parentNode.removeChild( element );
}
//changes text using element ID and tag
function changeText( elementId, tag, text ) {
	var element = document.getElementById( elementId );
	document.parentNode.getElementsByTagName( tag )[ 0 ].textContent = text;
}
window.onload = function() { // runs functions on page load for detecting widgets and setting dark colors
	//setting logo
	removeElement( 'footerEmailBx' );
	removeElement( 'lnkMyLink' );
	document.getElementsByTagName( 'img' )[ 0 ].src = logoURL;
	document.getElementsByTagName( 'img' )[ 0 ].id = ( 'logoImg' );
	addFooter();
}