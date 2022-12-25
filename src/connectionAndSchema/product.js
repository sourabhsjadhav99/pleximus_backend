const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  product_name: { type: String}, 
  product_description: { type: String},
  product_price: { type: String},
  
});
module.exports = mongoose.model("products", productSchema);
