const chai = require('chai');
const db = require('../database/database');

describe('Test 1', () => {
  before(async () => await db.open());

  after(async () => await db.close());

  it('test something', done => {
    done();
  });

});

