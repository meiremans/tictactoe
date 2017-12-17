import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createHashHistory} from 'history';
import {routerActions, routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import {createLogger} from "redux-logger";
import * as boardActions from '../actions/board';
import * as userActions from '../actions/user';




const history = createHashHistory();

const configureStore = (initialState) => {
    // Redux Configuration
    const middleware = [];
    const enhancers = [];

    // Thunk Middleware
    middleware.push(thunk);

    // Logging Middleware
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });
    middleware.push(logger);

    // Router Middleware
    const router = routerMiddleware(history);
    middleware.push(router);
    const actionCreators = {
        ...boardActions,
        ...userActions,
        ...routerActions
    };

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
            actionCreators,
        })
        : compose;

    enhancers.push(applyMiddleware(...middleware));
    const enhancer = composeEnhancers(...enhancers);

    return createStore(rootReducer, initialState,enhancer);
};

export { configureStore, history };
