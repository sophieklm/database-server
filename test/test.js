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

  describe('app', function() {
    describe('/set', function() {
      it('sets a key value pair', function(done) {
        chai.request(server)
        .get('/set?name=sophie')
        .end(function(err, res){
          expect(res).to.have.status(200);
          expect(res.text).to.equal('sophie');
          done();
        });
      });
    });    
    describe('/get', function() {
      it('gets a key value pair', function(done) {
        chai.request(server)
        .get('/set?name=sophie')
        .then(function(){
          chai.request(server)
          .get('/get?key=name')
          .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.text).to.equal('sophie');
            done();
          });
        });
      });
    });
  });
});
