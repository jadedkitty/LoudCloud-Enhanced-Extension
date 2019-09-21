var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('lms.css');
(document.head||document.documentElement).appendChild(style);

function addChat() {
	var chat = document.createElement('iframe');
	chat.src = 'https://deadsimplechat.com/4oAlSsyKG'
	chat.width = '100%';
	chat.height = '280px';
	chat.id = 'chatFrame';
	document.getElementById('my-groupsListWrap').appendChild(chat);
	//console.log('chat.contentWindow =', chat.contentWindow);
}
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
	
}
function changeText(elementId, tag, text) {
	var element = document.getElementById(elementId);
	document.parentNode.getElementsByTagName(tag)[0].textContent = text;
}
var BackgroundColor = "#34363e";
var logoURL = chrome.extension.getURL("logoBlank.png");
function setBlack(widget) {
  document.getElementById(widget).className = "tac-dashboard-box dashboard-box-black";
}


window.onload = function() {  // runs functions on page load for detecting widgets and setting dark colors
  main();
  // detecting widgets
  detectAndSetWidget('wrapper_events_lecturers');
  detectAndSetWidget('creditClassWrapper');
  detectAndSetWidget('studentSubmissionWrapper');
  detectAndSetWidget('studentGradebookWrapper');
  detectAndSetWidget('wrapper_campus_communities');
  detectAndSetWidget('wrapper_comp_based_courses2');  
  navMenu();
  navMenuText();
  
  //plannerText();
}

function main() {
  document.body.style.background = BackgroundColor;
  document.getElementById("headerId").style.background = "#434653";
  document.getElementsByTagName('img')[0].src = logoURL;
  document.getElementsByTagName('img')[0].id = ('logoImg');
  // https://i.imgur.com/n50MHX2.png
  document.getElementsByClassName('headerMast')[0].style.background = "#434653";
  document.getElementsByClassName('selected_role')[0].style.color = "#ffffff";
  document.getElementsByClassName('name')[0].style.color = "#ffffff";
  document.getElementsByClassName('lc_selectLi', 'lc_groupMenu lc_navHasChild')[0].style.background = "#434653";
  document.getElementsByClassName('lc_navigation')[0].style.background = "#434653";
  //document.getElementsByClassName('lc_pathLi')[0].setAttribute("style", "background: #9492a0 !important");
  document.getElementById("selectedNavTitle").setAttribute("style", "color: #ffffff !important");
}

function detectAndSetWidget(widgetName) {
  var dashboardWidgets = document.getElementById(widgetName);
  if (!dashboardWidgets) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
		detectAndSetWidget(widgetName);
	}, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  //console.log(widgetName +': Loaded');
  //console.log(widgetName +': Setting theme...');
  setBlack(widgetName);
  console.log(widgetName +': Theme set');
  if (widgetName == 'wrapper_campus_communities') {
	removeElement('noLearningCommunityData');
	addChat();
	var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace('Communities','Chat');
}
  }
}
function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

function navMenu() {
  var x = document.getElementsByClassName("lc_selectLi");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.background = "#434653";
  }
  document.getElementById("messagesMenuOption").style.background = "#434653";
  navMenuText();
}
function navMenuText() {
  var x = document.getElementsByClassName("lc_navBarTitle");
    if (!x) {
    //node does not exist yet
    //wait 1ms and try again
    console.log('NavText: Not loaded');
    window.setTimeout(function() {
		navMenuText();
	}, 1);
    console.log(widgetName +': Trying again...');
    return;
  }
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("style", 'color: #ffffff!important');
  }
}