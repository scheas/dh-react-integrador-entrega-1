import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mymdb from './mymdbapp/mymdb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a My Movie Data Base</h1>
        </header>
        <p className="App-intro">
            <Mymdb />
        </p>
      </div>
    );
  }
}

export default App;
