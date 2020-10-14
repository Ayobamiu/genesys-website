import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LearnableNavBar extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-section-navs">
        <NavLink className="learnable-section-navs__link" to="/learnable">
          home
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          to="/learnable/software-developers"
        >
          softwaredevelopers
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          to="/learnable/product-designers"
        >
          Product designers
        </NavLink>
        <NavLink className="learnable-section-navs__link" to="/learnable/apply">
          apply
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          to="/learnable/journal"
        >
          journal
        </NavLink>
        <NavLink className="learnable-section-navs__link" to="/learnable/faq">
          faq
        </NavLink>
      </div>
    );
  }
}

export default LearnableNavBar;
