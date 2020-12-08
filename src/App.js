import React from 'react';
import { Wishlist } from './features/wishlist/Wishlist';
import WishDetail from './features/wishlist/WishDetail';
import './App.css';
import Header from "./UIComponents/Header/Header";
import Footer from "./UIComponents/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./UIComponents/Contact/Contact";

function App() {
  return (
    <div className="App">
        <div className="container">
        <Router>
          <Header />
          <div className="container-main">
            <Switch>
              <Route path="/Contact" component={Contact} />
              <Route path="/Wish/:wishId" component={WishDetail} />
              <Route path="/" component={Wishlist}/>
              <div className="list"></div>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
