console.log("background init");

chrome.runtime.onMessage.addListener((message, sender) => {
  (async () => {
    if (message.type === "open_side_panel") {
      console.log("tabId", sender!.tab!.id!);
      await chrome.sidePanel.open({ tabId: sender!.tab!.id! });
    }
  })();
});
