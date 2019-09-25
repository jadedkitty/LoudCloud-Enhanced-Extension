function resetWidgets() {
  chrome.tabs.executeScript({
    file: 'widgetButtons/resetWidgets.js'
  }); 
}

function addNotesWidget() {
  chrome.tabs.executeScript({
    file: 'widgetButtons/addNotes2.js'
  }); 
}

document.getElementById('resetWidgets').addEventListener('click', resetWidgets);

document.getElementById('addNotesButton').addEventListener('click', addNotesWidget);

