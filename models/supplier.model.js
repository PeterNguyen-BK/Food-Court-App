const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: String,
    password: String
});

const supplier = mongoose.model('supplier', supplierSchema, 'suppliers');

module.exports = supplier;