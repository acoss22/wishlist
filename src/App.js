import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wish from './Wish/Wish';
class App extends Component {

  state = {
    wishes : [
      {wishname: 'new mouse'},
      {wishname: 'new keyboard'},
      {wishname: 'new headset'}
    ]
    

  }


  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to WishList Online</h1>
        <p className="App-intro">
          <Wish wishname={this.state.wishes[0].wishname}/>
          <Wish wishname={this.state.wishes[1].wishname}/>
          <Wish wishname={this.state.wishes[2].wishname}/>
        </p>
      </div>
    );
  }
}

export default App;
