document.addEventListener('DOMContentLoaded', function() {
  const changeTextBtn = document.getElementById('changeTextBtn');

  changeTextBtn.addEventListener('click', function() {
    // Find the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Send a message to the content script in the active tab
      chrome.tabs.sendMessage(tabs[0].id, { action: "change_text" });
    });
  });
});