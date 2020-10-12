import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import "./font_awesome/css/all.css";
import "./font_awesome/css/all.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./components/landing";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
