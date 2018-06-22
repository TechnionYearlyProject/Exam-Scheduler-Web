const app = require('../app');
const db = require('../database/database');
const chai = require('chai');
const chai_http = require('chai-http');
chai.use(chai_http);
chai.should();

describe('Login', () => {
  beforeEach(async () => {
    await db.open();
  });

  afterEach(async () => {
    await db.close()
  });

  // it('should login successfully with all parameters', done => {
  //   chai.request(app)
  //   .post('/api/login')
  //   .send({
  //     name: 'Administrator',
  //     email: 'admin@technion.ac.il',
  //     password: 'Aa123456'
  //   })
  //   .end((err, res) => {
  //     res.should.have.status(200);
  //     res.body.should.be.a('object');
  //     res.body.should.have.property('auth').eql(true);
  //     res.body.should.have.property('token');
  //     done();
  //   })
  // });

  it('should not login if username is unknown', done => {
    chai.request(app)
    .post('/api/login')
    .send({
      name: 'Unknwon',
      email: 'admin@technion.ac.il',
      password: 'Aa123456'
    })
    .end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.a('object');
      res.body.should.have.property('auth').eql(false);
      res.body.should.have.property('token').eql(null);
      res.body.should.have.property('error_message').eql('No user found.');
      done();
    })
  });

  it('should not login if wrong password', done => {
    chai.request(app)
    .post('/api/login')
    .send({
      name: 'Administrator',
      email: 'admin@technion.ac.il',
      password: '1234'
    })
    .end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('auth').eql(false);
      res.body.should.have.property('token').eql(null);
      res.body.should.have.property('error_message').eql('Wrong password.');
      done();
    })
  });
});

