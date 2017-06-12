var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Status and content', function() {
  it('succeeds', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      expect(res).to.have.status(200);
      done();
    });
  });
  it('has content', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      expect(res.text).to.equal('Hello World!');
      done();
    });
  });
});
