const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PTCRecommendedProducts');
const db = mongoose.connection;

const recommendedCustomerSchema = new mongoose.Schema({
  itemId: String,
  recommendedProducts: [String],
});

const recommendedTreatSchema = new mongoose.Schema({
  itemId: String,
  recommendedProducts: [String],
});

const recommendedPetSchema = new mongoose.Schema({
  itemId: String,
  recommendedProducts: [String],
});

const RecommendedProductsCustomer = mongoose.model('Recommended_Products_Customer', recommendedCustomerSchema);
const RecommendedProductsTreat = mongoose.model('Recommended_Products_Treat', recommendedTreatSchema);
const RecommendedProductsPet = mongoose.model('Recommended_Products_Pet', recommendedPetSchema);

const retrieveRecommendations = function(itemId, recommendations) {
  return RecommendedProductsCustomer.findOne({ itemId }).select('recommendedProducts -_id').exec()
    .then((data) => {
      recommendations.customer = data.recommendedProducts;
      return RecommendedProductsTreat.findOne({ itemId }).select('recommendedProducts -_id').exec();
    })
    .then((data) => {
      recommendations.treat = data.recommendedProducts;
      return RecommendedProductsPet.findOne({ itemId }).select('recommendedProducts -_id').exec();
    })
    .then((data) => {
      recommendations.pet = data.recommendedProducts;
    });
};

module.exports.db = db;
module.exports.RecommendedProductsCustomer = RecommendedProductsCustomer;
module.exports.RecommendedProductsTreat = RecommendedProductsTreat;
module.exports.RecommendedProductsPet = RecommendedProductsPet;
module.exports.retrieveRecommendations = retrieveRecommendations;
