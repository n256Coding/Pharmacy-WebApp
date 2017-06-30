/**
 * Created by Nishan on 6/29/2017.
 */
'use strict';

var mocha = require('mocha');
var should = require('should');
var request = require('supertest');
var app = require('../../server');

var agent = request.agent(app);

describe('Test cases of drug stock router', function () {
    it('should get stock details all drugs in stock', function (done) {
        agent.get('/drugStocks').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });

    it('should get stock details of specific drug by id', function (done) {
        agent.get('/drugStocks/59206d1eb95c060248bcaa91').expect(200).end(function (err, res) {
            if(err){
                done(err);
            }else{
                res.should.be.an.Object();
                done();
            }
        });
    });
});