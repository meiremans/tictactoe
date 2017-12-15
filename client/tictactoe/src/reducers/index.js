// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import board from "./board";

const rootReducer = combineReducers({
    board,
    router
});

export default rootReducer;
