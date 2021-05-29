import React from "react";
import Home from "./Screens/Home.jsx";
import Main from "./Screens/Main";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chat">
        <Main />
      </Route>
    </>
  );
}
