function resetWidgets() {
  chrome.tabs.executeScript({
    file: 'resetWidgets.js'
  }); 
}

function addNotesWidget() {
  chrome.tabs.executeScript({
    file: 'addNotes2.js'
  }); 
}

document.getElementById('resetWidgets').addEventListener('click', resetWidgets);

document.getElementById('addNotesButton').addEventListener('click', addNotesWidget);

