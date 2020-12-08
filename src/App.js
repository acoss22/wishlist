import React from 'react';
import { Wishlist } from './features/wishlist/Wishlist';
import WishDetail from './features/wishlist/WishDetail';
import './App.scss';
import Header from "./UIComponents/Header/Header";
import Footer from "./UIComponents/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./UIComponents/Contact/Contact";
import Home from './UIComponents/Home/Home';
import AddWish from './features/wishlist/AddWish';

function App() {
  return (
    <div className="App">
        <div>
        <Router>
          <Header />
          <div className="container-main">
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/Contact" component={Contact} />
              <Route path="/AddWish" component={AddWish} />
              <Route path="/Wish/:wishId" component={WishDetail} />
              <Route path="/Wishlist" component={Wishlist}/>
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
