import React from "react";
import { createRoot } from "react-dom/client";

const Options = () => {
  return <>我是 Options 的界面</>;
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
