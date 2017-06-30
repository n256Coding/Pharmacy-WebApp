/**
 * Created by Nishan on 5/1/2017.
 */
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var emailHistorySchema = new Schema({
    to: {
        type: String
    },
    subject: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String
    }
}, {collection: 'emailHistory'});

var emailHostoryModel = mongoose.model('EmailHistoryModel', emailHistorySchema);

module.exports = emailHostoryModel;