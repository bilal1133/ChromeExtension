// Listen for clicks on the extension's icon.
chrome.action.onClicked.addListener((tab) => {
  // Check if the current tab's URL matches the desired pattern.
  if (/^https:\/\/www\.fiverr/.test(tab.url)) {
    // Execute the script only if the URL matches.
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["ui.js"],
      })
      .then(() => {
        console.log("Script injected");
      })
      .catch((error) => {
        console.error("Failed to inject script: ", error);
      });
  }
});
