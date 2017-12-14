// @flow
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createHashHistory} from 'history';
import {routerActions, routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import {createLogger} from "redux-logger";


const history = createHashHistory();
console.log(history);
const configureStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

export default { configureStore, history };
