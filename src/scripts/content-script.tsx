const button = new DOMParser().parseFromString(
  "<button>Click to open AI 助手</button>",
  "text/html"
).body.firstElementChild;
button!.addEventListener("click", function () {
  console.log("sendMessage open_side_panel", chrome.runtime);
  chrome.runtime.sendMessage({ type: "open_side_panel" });
});
document.body.prepend(button!);

console.log("content-script 1");
// import { Popover, Button } from "antd";
// import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
// console.log("content-script 2");
// const ExtensionPopover: React.FC = () => {
//   const [open, setOpen] = useState(true);

//   const hide = () => {
//     setOpen(false);
//   };

//   const handleOpenChange = (newOpen: boolean) => {
//     setOpen(newOpen);
//   };

//   return (
//     <Popover
//       content={<a onClick={hide}>Close</a>}
//       title="Title"
//       trigger="click"
//       open={open}
//       onOpenChange={handleOpenChange}
//     >
//       <Button type="primary">Click me</Button>
//     </Popover>
//   );
// };
// console.log("content-script 3");
// const div = document.createElement("div");
// div.id = "sense";
// document.body.appendChild(div);
// const root = createRoot(div);
// console.log("content-script 4", document.body);

// root.render(
//   <React.StrictMode>
//     <ExtensionPopover />
//   </React.StrictMode>
// );
// console.log("content-script 5");
// // 1 选中文本打开打印
// document.addEventListener("mouseup", function () {
//   var selectedText = window.getSelection()!.toString();
//   if (selectedText) {
//     console.log("选中文本");
//   }
// });
// console.log("content-script 6");
// 2 选中文本显示 popover
// 3 点击 popover 打开 sidepanel
