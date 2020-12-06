import React from 'react';
import logo from './logo.svg';
import { Wishlist } from './features/wishlist/Wishlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wishlist />
      </header>
    </div>
  );
}

export default App;
