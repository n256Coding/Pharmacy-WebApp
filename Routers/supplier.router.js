/**
 * Created by Nishan on 6/28/2017.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Router = express.Router();
require('../MongooseSchemas/drug.model');
var DrugModel = mongoose.model('drugModel');

Router.get('/', function (req, res) {
    DrugModel.find().then(function (output) {
        res.json(output);
    });
});

module.exports = Router;