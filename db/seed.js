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

const allCustomerRP = [item100Customer];
const allTreatRP = [item100Treat];
const allPetRP = [item100Pet];

const generateData = function (array) {
  let count = maximumId - minimumId;

  //greater than 0 since the data is hardcoded for item 100.
  //If additional data is hardcoded, this value needs to be increased
  //For instance, if items 101 to 104 are hardcoded, value should now be 4
  while (count > 0) {
    const currentId = minimumId + count;
    const recommendedProducts = [];
    let numberOfProductRecommendations = 5;

    while (numberOfProductRecommendations > 0) {
      const recommendedProduct = randomIdGenerator(currentId);
      recommendedProducts.push(recommendedProduct);

      numberOfProductRecommendations--;
    }

    array.push({ itemId: currentId.toString(), recommendedProducts });

    count--;
  }
};

generateData(allCustomerRP);
generateData(allTreatRP);
generateData(allPetRP);

module.exports.allCustomerRP = allCustomerRP;
module.exports.allTreatRP = allTreatRP;
module.exports.allPetRP = allPetRP;
