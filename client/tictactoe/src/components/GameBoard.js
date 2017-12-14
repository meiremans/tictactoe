import React, { Component } from 'react';
import './GameBoard.css';

class App extends Component {
    render() {
        return (
            <div className="GameBoard">
                <p className="GameBoard">
                <ul>
                    <li className='board left' id='1-1'>1-1</li>
                    <li className='board' id='1-2'>1-2</li>
                    <li className='board right' id='1-3'>1-3</li>
                    <li className='board left middle' id='2-1'>2-1</li>
                    <li className='board middle' id='2-2'>2-2</li>
                    <li className='board right middle' id='2-3'>2-3</li>
                    <li className='board left' id='3-1'>3-1</li>
                    <li className='board' id='3-2'>3-2</li>
                    <li className='board right' id='3-3'>3-3</li>
                </ul>
                </p>
            </div>
        );
    }
}

export default App;
