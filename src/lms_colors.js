var BackgroundColor = "#34363e";

function setBlack(widget) {
  document.getElementById(widget).className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("creditClassWrapper").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("studentSubmissionWrapper").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("studentGradebookWrapper").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("wrapper_campus_communities").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("wrapper_comp_based_courses2").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("wrapper_events_lecturers").className = "tac-dashboard-box dashboard-box-black";
  //document.getElementById("planner_accordionBody_0").style.color = "#64686a";
}

// runs setblack and darkplanner 3.5 seconds after page load
window.onload = function() {
  main();
  detectWidget('wrapper_events_lecturers');
  detectWidget('creditClassWrapper');
  detectWidget('studentSubmissionWrapper');
  detectWidget('studentGradebookWrapper');
  detectWidget('wrapper_campus_communities');
  detectWidget('wrapper_comp_based_courses2');
  
  // class dashboard
  //detectWidget('lc-hom-box');
  
  //planner text
  plannerText();
  //calendar();
  //setTimeout(setBlack, 3500);
  //setTimeout(darkPlanner, 3500);
}

function main() {
  document.body.style.background = BackgroundColor;
  document.getElementById("headerId").style.background = "#434653";
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

function darkPlanner() {
  // document.getElementsByClassName('current')[0].setAttribute("style", "background: #218ae7!important");
  // document.getElementsByClassName('ui-widget-content')[0].setAttribute("style", "background: #2e3035!important");
  document.getElementById("wrapper_comp_based_courses2").className = "tac-dashboard-box dashboard-box-black";
  document.getElementById("wrapper_events_lecturers").className = "tac-dashboard-box dashboard-box-black";
  // document.getElementsByClassName("ul.plannerItemsList li h3").setAttribute("style", "color: #64686a"); 
  // document.getElementsByClassName("classScheduleContainer").setAttribute("style", "filter: grayscale(100%)"); 
  document.getElementsByClass("ul.plannerItemsList li h3")[0].style.color = "#ffffff";
}


var x = new MutationObserver(function(e) {
  var dashboardWidgets = document.getElementById('wrapper_events_lecturers');
  if (dashboardWidgets.addedNodes) {
    console.log('Node Added');
	setBlack();
  }
  if (!x) {
    console.log('Node not detected');
  }
});

function detectWidget(widgetName) {
  var dashboardWidgets = document.getElementById(widgetName);
  if (!dashboardWidgets) {
    //node does not exist yet
    //wait 500ms and try again
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

// document.getElementById("creditClassWrapper").className = "tac-dashboard-box dashboard-box-black";
// userDashboardWidget.changeWidgetBackGround('creditClassWrapper','dashboard-box-black',this,'creditbasedClassesSelectedColorIcon'); 
// userDashboardWidget.changeWidgetBackGround('studentSubmissionWrapper','dashboard-box-black',this,'studentSubmissionSelectedColorIcon'); 
// userDashboardWidget.changeWidgetBackGround('studentGradebookWrapper','dashboard-box-black',this,'studentGradebookSelectedColorIcon'); 
// userDashboardWidget.changeWidgetBackGround('wrapper_campus_communities','dashboard-box-black',this,'groupWidgetSelectedColorIcon'); 
// userDashboardWidget.changeWidgetBackGround('wrapper_events_lecturers','dashboard-box-black',this,'eventsWidgetSelectedColorIcon'); 
// userDashboardWidget.changeWidgetBackGround('wrapper_comp_based_courses2','dashboard-box-black',this,'progressWidgetSelectedColorIcon');
