import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "../styles/globalStyles.js";

import { StoreProvider } from "./Store";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <GlobalStyles />
        <App />
    </StoreProvider>
  </React.StrictMode>,
  root
);
