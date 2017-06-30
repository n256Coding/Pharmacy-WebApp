/**
 * Created by Nishan on 5/20/2017.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
require('./../MongooseSchemas/drug.model.js');
var drugModel = mongoose.model('drugModel');
var drugRouter = express.Router();

drugRouter.get('/', function (req, res) {
   drugModel.find().then(function (output) {
       res.json(output);
   });
});

module.exports = drugRouter;