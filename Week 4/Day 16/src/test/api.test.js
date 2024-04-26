//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Express API Testing', () => {


  describe('Department API Testing', () => {

    it('it should GET all the departments', (done) => {
      chai.request(server)
        .get('/deptapi/Depts')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');         
          done();
        });
    });

    it('it should POST the dept object', (done) => {
      var deptObj  = { deptno : 898,  dname  :  'TestDept', loc   : 'TestLoc'  };

    chai.request(server)
        .post('/deptapi/Depts')
        .send(deptObj)
        .end((err, res) => {
              console.log(res.body);
              res.should.have.status(200);
              res.body.should.have.property('message').eql('Dept details are inserted'); 
          done();
        });
  });

  }); 



});