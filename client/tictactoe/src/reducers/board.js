import {
    DO_MOVE, NEW_GAME,GAME_WON
} from '../actions/board';


const initialState = getInitialState();

export default function doMove(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case DO_MOVE:
            newState = {...state};
            newState.field[action.index].player = action.player;
            return newState;
        case NEW_GAME:
            newState = getInitialState();
            newState.gameId = action.id;
            return newState;
        case GAME_WON:
            newState = {...state};
            newState.winner = action.winner;
            return newState;
        default:
            return state;
    }
}

function getInitialState() {
    return (
        {
            field: [{
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
                placeId: "3-2"
            }, {
                placeId: "3-3"
            }]
        })
}
