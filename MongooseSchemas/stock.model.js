/**
 * Created by Nishan on 4/29/2017.
 */
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StockSchema = new Schema({
    name: {
        type: String
    },
    unitType: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    qty: {
        type: String
    }
}, {collection:'stock'});

var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;