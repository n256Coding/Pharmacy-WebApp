/**
 * Created by Nishan on 6/28/2017.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var drugStockSchema = new Schema({
    invoiceNumber : {
        type : String
    },
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    EXP : {
        type : String,
        required : true
    },
    remarks : {
        type : String
    }
}, {collection : 'DrugStockSchema'});

var DrugStockModel = mongoose.model('DrugStockModel', drugStockSchema);

module.exports = DrugStockModel;