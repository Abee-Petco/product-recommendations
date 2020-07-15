const updateTreat = function (list) {
  return {
    type: 'UPDATE_TREAT_LIST',
    payload: list,
  };
};

export default updateTreat;
