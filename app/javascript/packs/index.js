import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("root");
  app &&
    ReactDOM.render(
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>,
      app
    );
});
