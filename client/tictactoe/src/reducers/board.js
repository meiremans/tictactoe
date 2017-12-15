import {
    DO_MOVE
} from '../actions/board';


const initialState = {
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
};

export default function doMove(state = initialState, action) {
    switch (action.type) {
        case DO_MOVE:
            const newState = {...state};
            newState.field[action.index].player = action.player;
            return newState;
        default:
            return state;
    }
}
