const updatePet = function (list) {
  return {
    type: 'UPDATE_PET_LIST',
    payload: list,
  };
};

export default updatePet;
