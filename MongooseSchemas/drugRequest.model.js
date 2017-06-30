/**
 * Created by Nishan on 5/20/2017.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var drugRequestSchema = new Schema({
    RequestID : {
        type : Number
    },
    drugID : {
        type : String
    },
    drug_name : {
        type : String
    },
    drug_type : {
        type : String,
        default : 'tablet'
    },
    requested_quantity : {
        type : Number
    },
    available_quantity : {
        type : Number
    },
    department : {
        type : String
    },
    approve : {
        type : String
    },
    approved_quantity : {
        type : Number
    },
    status : {
        type : String
    },
    date : {
        type : String
    }
}, {collection : 'drugRequest'});

var drugRequestModel = mongoose.model('drugRequestModel', drugRequestSchema);

module.exports = drugRequestModel;