const {
  db,
  RecommendedProductsCustomer,
  RecommendedProductsTreat,
  RecommendedProductsPet,
} = require('./database.js');
const { allCustomerRP, allTreatRP, allPetRP } = require('./seed.js');

RecommendedProductsCustomer.findOne({ itemId: '100' }).exec()
  .then((data) => {
    if (data) {
      throw (new Error('Error: database already seeded. If you want to reseed database, you must first drop it.'));
    }
    return RecommendedProductsCustomer.create(allCustomerRP);
  })
  .then(() => RecommendedProductsTreat.create(allTreatRP))
  .then(() => RecommendedProductsPet.create(allPetRP))
  .then(() => {
    console.log('PTCRecommendedProducts seeded succesfully in your MongoDB instance');
    db.close();
  })
  .catch((err) => {
    console.log(err);
    db.close();
  });
