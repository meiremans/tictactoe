import React from 'react';
import './components/index.css';
import { render } from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { configureStore, history } from './store/configureStore';


const store = configureStore();


render(
        <Root store={store} history={history} />,
    document.getElementById('root')
);
registerServiceWorker();
