const treatReducer = function (state = [], action) {
  if (action.type === 'UPDATE_TREAT_LIST') {
    return action.payload;
  } else {
    return state;
  }
};

export default treatReducer;
