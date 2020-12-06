import React, { Component } from "react";

import "./Header.css";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <a href="#default" className="logo">
            My WishList Online
          </a>
        </Link>
        <div className="header-right">
          {/* <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a> */}

          <Link to="Contact">
            <a  className="logo">Contact</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
