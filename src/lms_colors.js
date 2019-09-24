// inject CSS stylesheet
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('lms.css');
(document.head || document.documentElement).appendChild(style);

var logoURL = chrome.extension.getURL("logoBlank.png");

//chrome.storage.sync.set({ "noteNumber": "0" }, function(){
//});
//chrome.storage.local.set({ "noteNumber": "0" }, function(){
    //  Data's been saved boys and girls, go on home
//});

var noteNumber = '0';


//replaces communities widget contents with chat iframe
function addChat() {
  var chat = document.createElement('iframe');
  chat.src = 'https://deadsimplechat.com/4oAlSsyKG'
  chat.width = '100%';
  chat.height = '280px';
  chat.frameBorder = '0';
  chat.id = 'chatFrame';
  document.getElementById('my-groupsListWrap').appendChild(chat);
  //console.log('chat.contentWindow =', chat.contentWindow);
}

function addFooter() {
  var footer = document.createElement('span');
  footer.className = 'buildVersion';
  footer.id = 'enhancedFooter';
  document.getElementsByClassName('footerMast')[0].appendChild(footer);
  document.getElementById('enhancedFooter').textContent = 'LoudCloud Enhanced by jadedkitty  [Ver: 1.1]';
  var github = document.createElement('a');
  github.id = 'githubLink';
  document.getElementsByClassName('footerMast')[0].appendChild(github);
  document.getElementById('githubLink').textContent = '  -->  See <> on GitHub';
  document.getElementById('githubLink').href = 'https://github.com/jadedkitty/LoudCloud-Enhanced-Extension';
}

function addNotes() {
  var notesWidget = document.createElement('div');
  notesWidget.className = 'column widgetSmall ui-sortable-handle';
  notesWidget.id = '69';
  
  var notesWidgetWrapper = document.createElement('div');
  notesWidgetWrapper.className = 'tac-dashboard-box dashboard-box-black';
  notesWidgetWrapper.id = '70';

  var notesWidgetHeader = document.createElement('div');
  notesWidgetHeader.className = 'tac-dashboard-box-header';
  notesWidgetHeader.id = '71';
  
  var notesWidgetHeaderText = document.createElement('h2');
  notesWidgetHeaderText.textContent = 'Notes';
  notesWidgetHeaderText.id = '72';
  
  //chrome.storage.sync.get(/* String or Array */["noteNumber"], function(noteCount){
    //noteCount = "noteNumber";
  //});
  
  var notesCounter = document.createElement('span');
  notesCounter.className = 'counter';
  notesCounter.id = 'notesCounter';
  notesCounter.textContent = noteNumber;
  
  var notesWidgetContent = document.createElement('div');
  notesWidgetContent.className = 'tac-dashboard-box-content';
  notesWidgetContent.id = '74'
  
  var notesWidgetContentWrapper = document.createElement('div');
  notesWidgetContentWrapper.className = 'tac-dashboard-box-content posRel ps ps--active-y';
  notesWidgetContentWrapper.style = 'height:284px; overflow:hidden';
  notesWidgetContentWrapper.id = '75';
  
  //var notesWidgetList = document.createElement('ul');
  //var baseNoteHeight = 252;
  //notesWidgetList.className = 'meta-list left-icon right-content';
  //notesWidgetList.style = 'height: ${baseNoteHeight * noteNumber}px';
  //notesWidgetList.id = '76';
  
  var notes = document.createElement('iframe');
  notes.src = chrome.extension.getURL("notes.html");
  notes.width = '100%';
  notes.height = '280px';
  notes.frameBorder = '0';
  notes.id = 'notesList';
  
  var notesWidgetSettings = document.createElement('div');
  notesWidgetSettings.className = 'fc-settingBox,';
  notesWidgetSettings.id = '78';
  
  var notesWidgetSettingsLink = document.createElement('a');
  notesWidgetSettingsLink.className = 'fc-settingLink fc-settingLinkYellow fc-settingLinkDropDown';
  notesWidgetSettings.setAttribute('aria-label', 'Select Submissions Filters');
  notesWidgetSettingsLink.href = 'javascript:void(0)';
  notesWidgetSettingsLink.onclick = 'javascript:userDashboardWidget.showAndHideFilterPopUp(this)';
  notesWidgetSettingsLink.setAttribute('aria-expanded', 'false');
  notesWidgetSettingsLink.textContent = '&nbsp;';
  notesWidgetSettingsLink.style = 'background-image: url(../../images/1568045196802/dashboard/icons_dashboard.png) no-repeat 0 0 !important; background-position: -8px -131px !important';
  notesWidgetSettingsLink.id = 'noteButton';
  
  var widgetColumns = document.getElementById('columns');
  if (!widgetColumns) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      addNotes();
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  widgetColumns.appendChild(notesWidget);
  
  var notesWrapper = document.getElementById('69');
  if (!notesWrapper) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesWrapper;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesWrapper.appendChild(notesWidgetWrapper);
  
  var notesHeader = document.getElementById('70');
  if (!notesHeader) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesHeader;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesHeader.appendChild(notesWidgetHeader);
  
  var notesContent = document.getElementById('70');
  if (!notesContent) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesContent;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesContent.appendChild(notesWidgetContent);
  document.getElementById('70').appendChild(notesWidgetContent);
  
    var notesContentWrapper = document.getElementById('74');
  if (!notesContentWrapper) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesContentWrapper;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesContentWrapper.appendChild(notesWidgetContentWrapper);
  
  var notesFrame = document.getElementById('75');
  if (!notesFrame) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesFrame;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesFrame.appendChild(notes);
  
  var notesHeaderText = document.getElementById('71');
  if (!notesHeaderText) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesHeaderText;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesHeaderText.appendChild(notesWidgetHeaderText);
  //notesHeaderText.appendChild(notesWidgetSettings);
  
    var notesWidgetSettingsSub = document.getElementById('78');
  if (!notesWidgetSettingsSub) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesWidgetSettingsSub;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesWidgetSettingsSub.appendChild(notesWidgetSettingsLink);
  
  var notesHeaderCounter = document.getElementById('72');
  if (!notesHeaderCounter) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      notesHeaderCounter;
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  notesHeaderCounter.appendChild(notesCounter);
}

function addNoteToWidget() {
	var title = prompt("Please enter a title for your note");

	if (title != null) {
		var noteContent = prompt("Please enter the content of your note")
		if (noteContent != null) {
			return;
		}
		return;
	}
	var newNote = noteContent;
	//var noteCreate = document.createElement('li');
	//noteCreate.className('assignment-white');
	
//	document.getElementById("76").appendChild(
}

function removeElement(elementId) {
  // Removes an element from the DOM
  var element = document.getElementById(elementId);
  if (!element) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
      removeElement(elementId);
    }, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  element.parentNode.removeChild(element);

}
//changes text using element ID and tag
function changeText(elementId, tag, text) {
  var element = document.getElementById(elementId);
  document.parentNode.getElementsByTagName(tag)[0].textContent = text;
}

//sets class of widgets on dashboard to dashboard-box-black styling
function setBlack(widget) {
  document.getElementById(widget).className = "tac-dashboard-box dashboard-box-black";
}

window.onload = function() { // runs functions on page load for detecting widgets and setting dark colors
  //setting logo
  removeElement('footerEmailBx');
  removeElement('communitiesMenuOption');
  removeElement('lnkMyLink');
  addFooter();
  document.getElementsByTagName('img')[0].src = logoURL;
  document.getElementsByTagName('img')[0].id = ('logoImg');
  // detecting widgets
  detectAndSetWidget('wrapper_events_lecturers');
  detectAndSetWidget('creditClassWrapper');
  detectAndSetWidget('studentSubmissionWrapper');
  detectAndSetWidget('studentGradebookWrapper');
  detectAndSetWidget('wrapper_campus_communities');
  detectAndSetWidget('wrapper_comp_based_courses2');
  //var noteNumber = chrome.storage.local.get(/* String or Array */["noteNumber"]);
  //addNotes();

}

//detects when widgets load and immediately runs setBlack
// runs add chat when communities load
// removes useless progress widget upon load
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
  console.log(widgetName + ': Theme set');
  if (widgetName == 'wrapper_campus_communities') {
    removeElement('noLearningCommunityData');
    addChat();
    var textnodes = nativeSelector(),
      _nv;
    for (var i = 0, len = textnodes.length; i < len; i++) {
      _nv = textnodes[i].nodeValue;
      textnodes[i].nodeValue = _nv.replace('Communities', 'Chat');
    }
  }
  if (widgetName == 'wrapper_comp_based_courses2') {
    removeElement('18');
  }
}

function nativeSelector() {
  var elements = document.querySelectorAll("body, body *");
  var results = [];
  var child;
  for (var i = 0; i < elements.length; i++) {
    child = elements[i].childNodes[0];
    if (elements[i].hasChildNodes() && child.nodeType == 3) {
      results.push(child);
    }
  }
  return results;
}
