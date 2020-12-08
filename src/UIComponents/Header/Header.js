import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="logo">       
            My WishList Online
        </Link>
        <div className="header-right">
          <Link to="Contact" className="logo">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
