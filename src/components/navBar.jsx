import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/learnable/genesys_logo.png";

class NavBar extends Component {
  state = {};
  handlePopUpClose = () => {
    const navbar_pop_up = document.getElementById("navbar-pop-up");
    navbar_pop_up.style.display = "none";
  };
  handleToggle = () => {
    const navbar_pop_up = document.getElementById("navbar-pop-up");
    navbar_pop_up.style.display = "flex";
  };
  render() {
    return (
      <React.Fragment>
        <div className="navbar-pop-up" id="navbar-pop-up">
          <i
            className="fa fa-times navbar-pop-up-toggle"
            onClick={this.handlePopUpClose}
            id="pop-up-toggle"
          ></i>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/learnable"
            className="navbar-pop-up-link"
          >
            learnable
          </NavLink>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/"
            className="navbar-pop-up-link"
          >
            agora
          </NavLink>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/"
            className="navbar-pop-up-link"
          >
            startzone
          </NavLink>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/"
            className="navbar-pop-up-link"
          >
            about
          </NavLink>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/"
            className="navbar-pop-up-link"
          >
            contact
          </NavLink>
          <NavLink
            onClick={this.handlePopUpClose}
            to="/"
            className="navbar-pop-up-link"
          >
            dev studio
          </NavLink>
        </div>
        <ul className="navbar">
          <NavLink className="logo" to="/">
            <li>
              <img src={logo} />
            </li>
          </NavLink>
          <NavLink className="item" to="/learnable">
            <li>learnable</li>
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
            <i className="fa fa-bars" id="toggle"></i>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;
