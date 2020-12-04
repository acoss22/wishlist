import React, { Component } from "react";
import { render } from "react-dom";
import WishItem from "./Wish/WishItem";
import AddWish from "./Wish/AddWish";
import Header from "./Header/Header";
import "./App.css";
import WishList from "./WishList/WishList";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/Contact" component={Contact} />

              <AddWish onAdd={this.onAdd} />
              <WishList />
              <div className="list"></div>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
export default App;
