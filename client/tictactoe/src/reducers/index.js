import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import board from "./board";
import user from "./user";

const rootReducer = combineReducers({
    board,
    user,
    router
});

export default rootReducer;
