import { createStore, applyMiddleware } from 'redux';

import BuyBookReducer from './BuyBookReducer';
import { thunk } from 'redux-thunk';

const store = createStore(
  BuyBookReducer,
  applyMiddleware(thunk) // Add the thunk middleware here
);

export default store;
