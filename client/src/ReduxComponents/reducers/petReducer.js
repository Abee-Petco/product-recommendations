const petReducer = function (state = [], action) {
  if (action.type === 'UPDATE_PET_LIST') {
    return action.payload;
  } else {
    return state;
  }
};

export default petReducer;
