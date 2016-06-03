chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.activeElement.value = document.activeElement.value + request.string;
});
