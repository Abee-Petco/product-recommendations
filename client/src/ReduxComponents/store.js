import rootReducer from './rootReducer.js';

const { createStore } = Redux;

const initialState = {
  customer: [],
  treat: [],
  pet: [],
};

const store = createStore(rootReducer, initialState);

export default store;
