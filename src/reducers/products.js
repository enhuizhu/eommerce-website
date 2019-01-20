export const RECEIVE_PRODUCTS = 'logRECEIVE_PRODUCTS';

const defaultState = [];

export const products = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};