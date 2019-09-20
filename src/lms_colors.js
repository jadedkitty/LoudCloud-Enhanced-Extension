var BackgroundColor = "#34363e";

function setBlack(widget) {
  document.getElementById(widget).className = "tac-dashboard-box dashboard-box-black";
}


window.onload = function() {  // runs functions on page load for detecting widgets and setting dark colors
  main();
  // detecting widgets
  detectWidget('wrapper_events_lecturers');
  detectWidget('creditClassWrapper');
  detectWidget('studentSubmissionWrapper');
  detectWidget('studentGradebookWrapper');
  detectWidget('wrapper_campus_communities');
  detectWidget('wrapper_comp_based_courses2');
}

function main() {
  document.getElementById("headerId").style.background = "#434653";
  document.getElementsByClassName('lc_navIcons dashboardIco')[0].setAttribute("style", 'background: url("https://i.imgur.com/RqBuY1S.png") no-repeat scroll 0 0 rgba(0,0,0,0)');
  document.getElementsByTagName('img')[0].setAttribute("src", "https://i.imgur.com/n50MHX2.png");
  document.getElementById("logoidleft").setAttribute("src", "https://i.imgur.com/n50MHX2.png");
  document.getElementsByClassName('headerMast')[0].style.background = "#434653";
  document.getElementsByClassName('selected_role')[0].style.color = "#ffffff";
  document.getElementsByClassName('name')[0].style.color = "#ffffff";
  document.getElementsByClassName('lc_selectLi', 'lc_groupMenu lc_navHasChild')[0].style.background = "#434653";
  document.getElementsByClassName('lc_navigation')[0].style.background = "#434653";
  document.getElementsByClassName('lc_pathLi')[0].setAttribute("style", "background: #9492a0 !important");
  document.getElementById("selectedNavTitle").setAttribute("style", "color: #ffffff !important");
}

function detectWidget(widgetName) {
  var dashboardWidgets = document.getElementById(widgetName);
  if (!dashboardWidgets) {
    //node does not exist yet
    //wait 1ms and try again
    //console.log(widgetName +': Not loaded');
    window.setTimeout(function() {
		detectWidget(widgetName);
	}, 1);
    //console.log(widgetName +': Trying again...');
    return;
  }
  //console.log(widgetName +': Loaded');
  //console.log(widgetName +': Setting theme...');
  setBlack(widgetName);
  console.log(widgetName +': Theme set');
}

function plannerText() {
  var x = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "#ffffff";
  }
}

function calendar() {
  var x = document.getElementsByClassName("ui-widget-content");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "#212329";
  }
}
