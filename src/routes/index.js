import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';
import NoMatch from '../views/NoMatchPage';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={HomePage}/>
        <Route component={NoMatch} />
    </Router>
);