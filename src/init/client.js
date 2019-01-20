import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import store from '../store/store';
import routes from '../routes';
import { Provider } from 'react-redux';

require('offline-plugin/runtime').install();

const provider = <Provider store = {store}>
    <Router routes={routes} history={browserHistory}/>
</Provider>;


ReactDOM.render(
    provider,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        provider,
        document.getElementById('app')
    );
}