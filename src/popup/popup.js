function resetWidgets() {
  chrome.tabs.executeScript({
    file: 'widgetButtons/resetWidgets.js'
  }); 
}

document.getElementById('resetWidgets').addEventListener('click', resetWidgets);

