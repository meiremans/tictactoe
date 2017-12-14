import React from 'react';
import './components/index.css';
import { render } from 'react-dom';
import Root from './containers/Root';
import thunk from 'redux-thunk';
import {createBrowserHistory, createHashHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from "react-router-redux";
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);
const store = createStore(rootReducer, {}, enhancer);


render(
        <Root store={store} history={history} />,
    document.getElementById('root')
);
registerServiceWorker();
