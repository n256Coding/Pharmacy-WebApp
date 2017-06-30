/**
 * Created by Nishan on 5/20/2017.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var drugSchema = new Schema({
    name : {
       type : String
    },
    type : {
       type : String
    },
    category : {
        type : String
    },
    quantity : {
        type : Number
    },
    price : {
        type : Number
    },
    reorderLvl : {
        type : Number
    },
    dangerLvl : {
        type : Number
    },
    provider : {
        type : String
    }
}, {collection: 'drug'});

var drugModel = mongoose.model('drugModel', drugSchema);
module.exports = drugModel;