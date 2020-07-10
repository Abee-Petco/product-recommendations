const item100Customer = { itemId: '100', recommendedProducts: ['101', '102', '103', '104', '105'] };
const item100Treat = { itemId: '100', recommendedProducts: ['120', '135', '150', '155', '170'] };
const item100Pet = { itemId: '100', recommendedProducts: ['199', '198', '197', '196', '195'] };

const minimumId = 100;
const maximumId = 199;

const randomIdGenerator = function (currentId) {
  const generatedId = Math.floor(Math.random() * (maximumId - minimumId + 1)) + minimumId;

  if (generatedId === currentId) {
    return randomIdGenerator(currentId);
  }

  return generatedId.toString();
};
