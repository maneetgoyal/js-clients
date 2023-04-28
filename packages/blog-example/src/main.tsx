import { Provider } from "@gadgetinc/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { api } from "./api";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={api.connection.currentClient}>
      <App />
    </Provider>
  </React.StrictMode>
);
