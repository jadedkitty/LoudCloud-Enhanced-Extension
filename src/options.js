var defaultState = "on";

function loadOptions() {
	var toggleState = chrome.storage.sync.get('toggleState', function(data) {

	// valid colors are red, blue, green and yellow
	if (toggleState == undefined || (toggleState != "on" && toggleState != "off")) {
		toggleState = defaultState;
	}

	var select = document.getElementById("switch");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == toggleState) {
			child.selected = "true";
			break;
		}
	}
});
}
loadOptions()
function saveOptions() {
	var select = document.getElementById("switch");
	var color = select.children[select.selectedIndex].value;
	chrome.storage.sync.set({ toggleState: switch });
}

function eraseOptions() {
	localStorage.removeItem("toggleState");
	location.reload();
}