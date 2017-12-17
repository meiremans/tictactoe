import React, {Component} from 'react';
import logo from '../logo.svg';
import './Home.css';
import GameBoard from './../containers/GameboardPage';
import {Link} from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        this.props.login();
    }
    render() {
        const {requestNewGame, board,login} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TIC-TAC-TOE</h1>
                </header>
                <button onClick={requestNewGame}>Start</button>
                <Link to="/history">
                    <button>History</button>
                </Link>
                {board.gameId ? <GameBoard/> : null}
                {board.winner ? "GAME OVER, PRESS START TO START A NEW GAME" : null}
            </div>
        );
    }
}

export default App;
