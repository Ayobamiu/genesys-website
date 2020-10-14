import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import Home from "./home";
import SoftwareDevelopers from "./softwareDevelopers";
import ProductDesigners from "./productDesigners";
import Apply from "./apply";
import Journal from "./journal";
import Faq from "./faq";
import LearnableNavBar from "./learnableNavBar";

class Learnable extends Component {
  state = {};
  render() {
    return (
      <div className="learnable">
       <LearnableNavBar/>
        <Switch>
          <Route
            path="/learnable/software-developers"
            component={SoftwareDevelopers}
          />
          <Route
            path="/learnable/product-designers"
            component={ProductDesigners}
          />
          <Route path="/learnable/apply" component={Apply} />
          <Route path="/learnable/journal" component={Journal} />
          <Route path="/learnable/faq" component={Faq} />
          <Route path="/learnable" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Learnable;
