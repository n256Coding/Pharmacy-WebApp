/**
 * Created by Nishan on 5/1/2017.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
require('./../MongooseSchemas/emailHistory.model.js');

var router = express.Router();
var EmailHistoryModel = mongoose.model('EmailHistoryModel');

router.get('/', function (req, res) {
    EmailHistoryModel.find().then(function (emailData) {
        res.json(emailData);
    })
});

module.exports = router;