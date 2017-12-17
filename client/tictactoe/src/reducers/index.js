import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import board from "./board";
import user from "./user";
import history from "./history";

const rootReducer = combineReducers({
    board,
    user,
    history,
    router
});

export default rootReducer;
