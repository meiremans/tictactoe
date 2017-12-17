import React, {Component} from 'react';
import './GameBoard.css';
import './BoardLayout'
import BoardLayout from "./BoardLayout";

class GameBoard extends Component {

    render() {
        const {playerDoMove, board} = this.props;
        return (
            <div className="GameBoard">
                <ul>
                    <BoardLayout field={board.field} action ={(index,player) => playerDoMove(index,player)} />
                </ul>
            </div>
        );
    }
}

export default GameBoard;
