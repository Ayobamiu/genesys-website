import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import "./font_awesome/css/all.css";
import "./font_awesome/css/all.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Learnable from "./components/learnable";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/learnable" component={Learnable} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
