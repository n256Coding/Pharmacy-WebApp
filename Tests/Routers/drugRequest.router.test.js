/**
 * Created by Nishan on 6/28/2017.
 */
'use strict';

var mocha = require('mocha');
var should = require('should');
var request = require('supertest');
var app = require('../../server');

var agent = request.agent(app);

describe('Test cases of drug request router', function () {
    it('should get approved drug requests', function (done) {
        agent.get('/drugRequests/approved').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });

    it('should get approved drug requests of selected manufacturer', function (done) {
        agent.get('/drugRequests/approved/Hemas').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });

    it('should update status of requests to \'requested\'', function (done) {
        var sampleRequest = { _id: '59206d1eb95c060248bcaa91',
            RequestID: 1,
            drugID: '2',
            drug_name: 'Paracitamol',
            requested_quantity: 100,
            available_quantity: 100,
            department: 'Department 2',
            approve: 'approved',
            approved_quantity: 25,
            status: 'approved',
            date: '2017-05-20',
            supplier: 'Glaxo Smith Kline',
            drug_type: 'tablet' };

        agent.put('/drugRequests/ordered').send(sampleRequest).expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
            }
        });
    });
});