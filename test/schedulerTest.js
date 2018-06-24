const app = require('../app');
const db = require('../database/database');
const chai = require('chai');
const chai_http = require('chai-http');
const assert = require("assert");
chai.use(chai_http);
chai.should();

const admin_user = { name: 'Administrator',
    email: 'admin@technion.ac.il',
    password: 'Aa123456'
};

describe('Scheduler', function() {
     before(async () => {
         await db.openProd();
     });

     after(async () => {
         await db.closeProd();
     });
     var agent = chai.request.agent(app);
     it('should do simple schedule without additional data', done => {
         agent
             .post('/api/login')
             .send(admin_user)
             .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('object');
                 res.body.should.have.property('auth').eql(true);
                 res.body.should.have.property('token');
                 var token = res.body.token;
                 agent
                     .post('/make-schedule')
                     .send({
                         semester:'2018-winter',
                         faculty: 'מדעי המחשב',
                         changes: '{}',
                     })
                     .set("Cookie", "token="+token)
                     .end((err, res) => {
                         validateResultLegality(res);
                         done();
                     });
             });
     });



    it('should schedule with additional data', done => {
        agent
            .post('/api/login')
            .send(admin_user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('auth').eql(true);
                res.body.should.have.property('token');
                var token = res.body.token;
                agent
                    .post('/make-schedule')
                    .send({
                        semester:'2018-spring',
                        faculty: 'מדעי המחשב',
                        changes: JSON.stringify({
                        '234111': {pref: 'סוף', preparationTime: '4'},
                        '234118': {pref: 'אוטומטי', 'has_exam': false},
                        '234122': {a_constraint: 'Tue Jul 10 2018 02:00:00 GMT+0300 (Israel Daylight Time)'}
                        }),
                    })
                    .set("Cookie", "token="+token)
                    .end((err, res) => {
                        validateResultLegality(res);
                        done();
                    });
            });
    });
});

function validateScheduleLegality(schedule) {
  return true;
}

function validateResultLegality(res) {
  res.should.have.status(200);
  res.body.should.be.a('object');
  res.body = JSON.parse(res.text);
  res.body.should.have.property('moed_a');
  res.body.should.have.property('moed_b');
  res.body.moed_a.should.have.property("schedule");
  res.body.moed_b.should.have.property("schedule");
  assert.ok(validateScheduleLegality(res.body.moed_a.schedule));
  assert.ok(validateScheduleLegality(res.body.moed_b.schedule));
}