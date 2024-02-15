console.log("background init");chrome.runtime.onMessage.addListener((a,e)=>{(async()=>a.type==="open_side_panel"&&(console.log("tabId",e.tab.id),await chrome.sidePanel.open({tabId:e.tab.id})))()});
