import { RECEIVE_PRODUCTS } from '../reducers/products';

export const receiveProducts = (payload) => {
  return {
    type: RECEIVE_PRODUCTS,
    payload
  }
}
