require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const foodRoute = require('./routes/food.route');
const supplierRoute = require('./routes/supplier.route');

const express = require('express');
let app = express();

app.use('/foods', foodRoute);
app.use('/suppliers', supplierRoute);







app.listen(5000, () => {
    console.log('Server is running...');
})