const food = require('../models/food.model');

module.exports.index = async (req, res) => {
    let foods = await food.find()
    res.json(foods);
}