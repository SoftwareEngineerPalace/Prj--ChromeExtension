import React from "react";
import { createRoot } from "react-dom/client";

const SideBar = () => {
  return <>我是 SidePanel 的界面</>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>
);
