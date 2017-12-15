import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css';
import GameBoard from './../containers/GameboardPage';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TIC-TAK-TOE</h1>
        </header>
            <button >Start</button >
            <Link to="/history"> <button >History</button ></Link>
            <GameBoard/>
      </div>
    );
  }
}

export default App;
