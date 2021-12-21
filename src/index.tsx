import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./assets/styles/global.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
