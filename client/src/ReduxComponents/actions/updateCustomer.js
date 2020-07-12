const updateCustomer = function (list) {
  return {
    type: 'UPDATE_CUSTOMER_LIST',
    payload: list,
  };
};

export default updateCustomer;
