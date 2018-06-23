const app = require('../app');
const db = require('../database/database');
const chai = require('chai');
const chai_http = require('chai-http');
chai.use(chai_http);
chai.should();

describe('Schedule', function() {
     before(async () => {
         await db.open();
     });

     after(async () => {
         await db.close();
     });
     var agent = chai.request.agent(app);
     it('should login successfully with all parameters', done => {
         agent
             .post('/api/login')
             .send({
                 name: 'Administrator',
                 email: 'admin@technion.ac.il',
                 password: 'Aa123456'
             })
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
                     })
                     .set("Cookie", "token="+token)
                     .end((err, res) => {
                         validateResultLegality(res);
                     });
             });
     });

 });

 function validateScheduleLegality(schedule){
     return true;
 }

 function validateResultLegality(res) {
     res.should.have.status(200);
     res.body.should.be.a('object');
     console.log(res.body);
     res.body.should.have.property('moed_a');
     res.body.should.have.property('moed_b');
     res.body.moed_a.should.have.property("schedule");
     res.body.moed_b.should.have.property("schedule");
     should(validateScheduleLegality(res.body.moed_a.schedule));
     should(validateScheduleLegality(res.body.moed_b.schedule));
 }