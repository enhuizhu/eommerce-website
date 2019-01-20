import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';
let store;

if (window._STORE) {
  store = createStore(allReducers, window._STORE ,applyMiddleware(thunk));
  console.log('store state', store.getState());
  delete window._STORE;
} else {
  store = createStore(allReducers, applyMiddleware(thunk));
}

export default store;