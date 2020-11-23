import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wish from './Wish/Wish';
class App extends Component {

  state = {
    name: 'mouse'

  }


  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to WishList Online</h1>
        <p className="App-intro">
          <Wish name={this.state.name}/>
        </p>
      </div>
    );
  }
}

export default App;
