import React from "react";
import ReactDOM from "react-dom/client";
import "./frontend/styles/css/index.css";
import App from "./frontend/App";
import { Providers } from "./frontend/providers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
