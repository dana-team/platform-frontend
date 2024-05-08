import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

if (process.env.NODE_ENV === "development") {
  const { startMockServiceWorker } = await import("./mocks/browser.ts");
  startMockServiceWorker();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
