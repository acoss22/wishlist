import React, { Component } from "react";
import "./AddWish.css";
class AddWish extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = "";
    this.priceInput.value = "";
  }

  render() {
    return (
      <div>
        <h3 className="addTitle">Add an item to your wishlist!</h3>
        <form onSubmit={this.onSubmit} className="addContainer">
          <input
            placeholder="Name"
            ref={(nameInput) => (this.nameInput = nameInput)}
          />
          <input
            placeholder="Price"
            ref={(priceInput) => (this.priceInput = priceInput)}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddWish;
