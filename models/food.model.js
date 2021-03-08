const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    image: String,
    discount: String,
    supplierID: mongoose.Types.ObjectId
});

const food = mongoose.model('food', foodSchema, 'foods');

module.exports = food;