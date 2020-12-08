import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wishlist from "../../features/wishlist/Wishlist";

class Home extends Component {
  render() {
    return (
      <div>
        <h2> Welcome to wishlist online!</h2>
        <div className="text-center mr-3">
          <Link to="AddWish" className="btn font-weight-bold button-add">
          Create New Wish 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>{" "}
          </Link>
          <Wishlist />
        </div>
      </div>
    );
  }
}

export default Home;
