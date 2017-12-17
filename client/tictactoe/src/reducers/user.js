import {
    LOGIN
} from '../actions/user';


const initialState = getInitialState();

export default function reducer(state = initialState, action) {
    let newState = {};
    console.log(action);
    switch (action.type) {
        case LOGIN:
            newState = {...state};
            newState.token = action.token;
            return newState;
        default:
            return state;
    }
}

function getInitialState() {
    return ({})
}
