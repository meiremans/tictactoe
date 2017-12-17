import {
    GET_HISTORY
} from '../actions/history';


const initialState = getInitialState();

export default function reducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {
        case GET_HISTORY:
            newState = {...state};
            newState = action.history;
            return newState;
        default:
            return state;
    }
}

function getInitialState() {
    return ({});
}
