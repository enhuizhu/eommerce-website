import React from 'react';
import store from './store';
import { receiveProducts } from '../actions/index';

test('test store', () => {
  let state = store.getState();  
  expect(state).toEqual({products: []});
  // state should be changed after receive products
  const products = ['a', 'b'];
  store.dispatch(receiveProducts(products));
  state = store.getState();
  expect(state).toEqual({products});
});