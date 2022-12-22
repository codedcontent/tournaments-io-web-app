import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/firebase";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{ horizontal: "center", vertical: "top" }}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
