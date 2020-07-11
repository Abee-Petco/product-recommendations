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

module.exports.db = db;
module.exports.RecommendedProductsCustomer = RecommendedProductsCustomer;
module.exports.RecommendedProductsTreat = RecommendedProductsTreat;
module.exports.RecommendedProductsPet = RecommendedProductsPet;
