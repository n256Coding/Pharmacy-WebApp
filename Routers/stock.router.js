/**
 * Created by Nishan on 4/29/2017.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var emailSender = require('./../EmailSender');

var getPDF = require('./../StockReportPDF');
require('./../MongooseSchemas/stock.model.js');

var router = express.Router();
var StockModel = mongoose.model('Stock');

router.get('/', function (req, res) {
   StockModel.find({qty:{$lt:10}}).then(function (stocks) {
       res.json(stocks);
   })
});

router.get('/pdf', function(req, res){
    var output = getPDF();
    console.log(output);
    res.send(output);
});

router.post('/email', function (req, res) {
    var emailContent = req.body;
    res.json(emailSender(emailContent));
});

module.exports = router;