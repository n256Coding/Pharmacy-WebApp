/**
 * Created by Nishan on 6/29/2017.
 */
'use strict';

var mocha = require('mocha');
var should = require('should');
var request = require('supertest');
var app = require('../../server');

var agent = request.agent(app);

describe('Test cases of email router', function () {
    it('should get list all emails send previously', function (done) {
        agent.get('/emails').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });
});