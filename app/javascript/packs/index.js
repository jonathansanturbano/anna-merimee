import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>,
    document.body.appendChild(document.createElement("div"))
  );
});
