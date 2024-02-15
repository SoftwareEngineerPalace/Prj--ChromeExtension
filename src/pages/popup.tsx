import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return <>我是 PopUp 界面</>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
