import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/learnable/genesys_logo.png";

class NavBar extends Component {
  state = {};
  handleToggle = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    } else {
      navbar.classList.add("active");
    }
  };
  render() {
    return (
      <React.Fragment>
        <ul className="navbar">
          <NavLink to="/">
            <li className="logo">
              <img src={logo} />
            </li>
          </NavLink>
          <NavLink to="/learnable">
            <li className="item">learnable</li>
          </NavLink>
          <li className="item">agora</li>
          <li className="item">startzone</li>
          <li className="item">about</li>
          <li className="item">contact</li>
          <li className="dev">
            <span className="hide_this">build a product with</span>{" "}
            <a className="dev_link" href="#">
              Devstudio
            </a>
          </li>
          <li onClick={this.handleToggle} className="toggle">
            <i className="fa fa-bars"></i>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;
