const customerReducer = function (state = [], action) {
  if (action.type === 'UPDATE_CUSTOMER_LIST') {
    return action.payload;
  } else {
    return state;
  }
};

export default customerReducer;
