import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);
root.render(<App />);
