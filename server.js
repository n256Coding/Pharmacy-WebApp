/**
 * Created by Nishan on 4/29/2017.
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var stockRouter = require('./Routers/stock.router.js');
var emailRouter = require('./Routers/email.router.js');
var drugRequestRouter = require('./Routers/drugRequest.router.js');
var drugRouter = require('./Routers/drug.router.js');
var orderInvoiceRouter = require('./Routers/order.router');
var drugStockRouter = require('./Routers/drugStock.router');
var supplierRouter = require('./Routers/supplier.router');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pharmacy',
    function (err) {
        if(err){
            console.log('There is an error connecting to MongoDB. '+err);
        }
        else{
            console.log('Connected to MongoDB succesfully');
        }
});

app.use('/app', express.static(__dirname+'/public'));
app.use('/stocks', stockRouter);
app.use('/suppliers', supplierRouter);
app.use('/emails', emailRouter);
app.use('/drugRequests', drugRequestRouter);
app.use('/drugs', drugRouter);
app.use('/orderInvoices', orderInvoiceRouter);
app.use('/drugStocks', drugStockRouter);

app.get('/', function (req, res) {
    res.sendFile( __dirname+'/public/home.html');
});

app.listen(3000, function(err){
   if(err){
       console.log('An error occured when starting server');
   }
   else{
       console.log('Server is listening on port 3000');
   }
});

module.exports = app;