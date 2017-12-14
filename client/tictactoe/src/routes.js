/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HistoryPage from './containers/HistoryPage';
import HomePage from "./containers/HomePage";


export default () => (
    <App>
        <Switch>
            <Route path="/history" component={HistoryPage} />
            <Route path="/" component={HomePage} />
        </Switch>
    </App>
);
