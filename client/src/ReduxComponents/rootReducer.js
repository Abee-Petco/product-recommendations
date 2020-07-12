import customerReducer from './reducers/customerReducer.js';
import treatReducer from './reducers/treatReducer.js';
import petReducer from './reducers/petReducer.js';

const { combineReducers } = Redux;

const rootReducer = combineReducers({
  customer: customerReducer,
  treat: treatReducer,
  pet: petReducer,
});

export default rootReducer;
