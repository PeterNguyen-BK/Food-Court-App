const supplier = require('../models/supplier.model');

module.exports.index = async (req, res) => {
    let suppliers = await supplier.find();
    res.json(suppliers);
}