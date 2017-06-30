/**
 * Created by Nishan on 6/28/2017.
 */
'use strict';

var mocha = require('mocha');
var should = require('should');
var request = require('supertest');
var app = require('../../server');

var agent = request.agent(app);

describe('Test cases of Drug router', function () {
    it('should get all drugs', function (done) {
        agent.get('/drugs').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.a.Object();
                done();
            }
        })
    })
});