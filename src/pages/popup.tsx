import React from "react";
import { createRoot } from "react-dom/client";
import styles from "./popup.module.css";

const Popup = () => {
  return (
    <div
      className={styles.popupWrapper}
    >
      我是 PopUp 界面
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
