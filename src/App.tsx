/**
 * component imports
 */
import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

/**
 * styled-components imports
 */
import { Header, NavButton } from "./styles/AppStyles";



export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <Header>
        <div>
          <img src="/img/boondock-logo.png" alt="the boondocks logo" />
          <h1>Pick your favorite episode!!!</h1>
        </div>
        <div>
          <Link to="/">
            <NavButton>Home</NavButton>
          </Link>
          <Link to="/favs">
            <NavButton>Favorite(s): {state.favorites.length}</NavButton>
          </Link>
        </div>
      </Header>
      {props.children}
    </>
  );
}
