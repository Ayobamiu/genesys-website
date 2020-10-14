import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LearnableNavBar extends Component {
  state = {};
  handleToggle = () => {
    const toggle = document.getElementById("learnable-section-navs__toggle");
    if (toggle.classList.contains("fa-bars")) {
      toggle.classList.replace("fa-bars", "fa-times");
    } else {
      toggle.classList.replace("fa-times", "fa-bars");
    }

    const links = document.querySelectorAll("#learnable-section-navs__link");
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      if ((link.style.display === "block")) {
        link.style.display = "none";
      } else {
        link.style.display = "block";
      }
    }
  };
  render() {
    return (
      <div className="learnable-section-navs">
        <NavLink className="learnable-section-navs__home" to="/learnable">
          home
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          id="learnable-section-navs__link"
          to="/learnable/software-developers"
        >
          softwaredevelopers
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          id="learnable-section-navs__link"
          to="/learnable/product-designers"
        >
          Product designers
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          id="learnable-section-navs__link"
          to="/learnable/apply"
        >
          apply
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          id="learnable-section-navs__link"
          to="/learnable/journal"
        >
          journal
        </NavLink>
        <NavLink
          className="learnable-section-navs__link"
          id="learnable-section-navs__link"
          to="/learnable/faq"
        >
          faq
        </NavLink>
        <i
          onClick={this.handleToggle}
          className="fa fa-bars learnable-section-navs__toggle"
          id="learnable-section-navs__toggle"
        ></i>
      </div>
    );
  }
}

export default LearnableNavBar;
