var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var request = require("request");
var expect = chai.expect;

chai.use(chaiHttp);

describe('status and content', function() {
  it('succeeds', function(done) {
    var url = "http://localhost:4000/";
    request(url, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('has content', function(done) {
    var url = "http://localhost:4000/";
    request(url, function(error, res, body) {
      expect(body).to.equal("Hello World!");
      done();
    });
  });
});

describe('app', function() {
  describe('/set', function() {
    var url = "http://localhost:4000/set?name=sophie";
    it("returns status 200", function(done) {
      request(url, function(error, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("sets the value", function(done) {
      request(url, function(error, res, body) {
        expect(body).to.equal("sophie");
        done();
      });
    });
  });
  describe('/get', function() {
    var url = "http://localhost:4000/get?key=name";
    it("returns status 200", function(done) {
      request(url, function(error, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("returns the value", function(done) {
      request(url, function(error, res, body) {
        expect(body).to.equal("sophie");
        done();
      });
    });
  });
});
