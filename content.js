chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "fullscreen") {
    document.documentElement.requestFullscreen();
  }
});
