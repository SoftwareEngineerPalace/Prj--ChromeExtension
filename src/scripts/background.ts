console.log("background init");

chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "test+id",
    title: "打开AI助理",
    type: "normal",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  item;
  chrome.sidePanel.open({ tabId: tab!.id! });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  (async () => {
    if (message.type === "open_side_panel") {
      console.log("tabId", sender!.tab!.id!);
      await chrome.sidePanel.open({ tabId: sender!.tab!.id! });
    }
  })();
});
