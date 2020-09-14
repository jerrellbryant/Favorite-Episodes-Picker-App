import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router"
import App from "./App";
import { GlobalStyles } from "./styles/globalStyles";

import { StoreProvider } from "./Store";

import Home from "./Home"
import FavPage from "./FavPage"

const root = document.getElementById("root");
const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <GlobalStyles />
      <Router>
        <App path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<FavPage />} path="/favs" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  root
);
