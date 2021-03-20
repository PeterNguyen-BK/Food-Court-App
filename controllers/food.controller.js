const food = require('../models/food.model');

module.exports.index = async (req, res) => {
    let foods = await food.find();
    const page = req.query.page;
    const limit = req.query.limit;
    const searchTerm = req.query.term;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};
    result.page = page;
    result.limit = limit;
    result.totalRows = foods.length;
    if (!searchTerm) {
        result.resultFoods = foods.slice(startIndex, endIndex);
    }else {
        result.resultFoods = foods.filter(food => 
            food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
        );
        result.totalRows = result.resultFoods.length;
    }
    
    res.json(result);
}