/**
 * Created by Nishan on 6/29/2017.
 */
'use strict';

var mocha = require('mocha');
var should = require('should');
var request = require('supertest');
var app = require('../../server');

var agent = request.agent(app);

describe('Test cases of order router', function () {
    it('should add a given order to database', function (done) {
        var sampleOrder = { invoice: { supplier: 'Hemas' },
                            invoiceLineItems: [
                                { drug_name: 'Panadol', qty: 50, drug_type: 'tablet' },
                                { drug_name: 'Paracitamol', qty: 25, drug_type: 'tablet' }
                            ] };

        agent.post('/orderInvoices').send(sampleOrder).expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });

    it('should get all orders in database', function (done) {
        agent.get('/orderInvoices').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });
});