var s = document.createElement('script');
s.src = chrome.runtime.getURL('addNotes2.js'); // This is the actual script
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);