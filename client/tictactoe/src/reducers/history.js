import {
    GET_HISTORY, REPLAY_MOVE,RESET_REPLAY
} from '../actions/history';


const initialState = getInitialState();

export default function reducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case GET_HISTORY:
            newState = {...state};
            newState.historyList = action.history;
            return newState;
        case REPLAY_MOVE:
            newState = {...state};
            newState.replayBoard[getPlaceIndexForTurn(action.turn,state.replayBoard)].player = action.turn.player;
            return newState;
        case RESET_REPLAY:
            newState = {...state};
            newState.replayBoard = getInitialState().replayBoard;
            return newState;
        default:
            return state;
    }
}

function getInitialState() {
    return ({
        replayBoard: [{
            placeId: "1-1"
        }, {
            placeId: "1-2"
        }, {
            placeId: "1-3"
        }, {
            placeId: "2-1"
        }, {
            placeId: "2-2"
        }, {
            placeId: "2-3"
        }, {
            placeId: "3-1"
        }, {
            placeId: "3-2",
        }, {
            placeId: "3-3"
        }],
        historyList: []
    });
}

function addTurnToHistoryField(turn, board) {
    for (let j = 0; j < board.length; j++) {
        if (board[j].placeId === turn.fieldId) {
            board[j].player = turn.player
        }
    }
    return board;
}

function getPlaceIndexForTurn(turn, board) {
    for (let j = 0; j < board.length; j++) {
        if (board[j].placeId === turn.fieldId) {
           return j;
        }
    }
}
