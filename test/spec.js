const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('one test', ()=> {
  it('passes a test', ()=> {
    expect(true).to.equal(true);
  });
});

describe('Routes', ()=> {
  describe('GET /', ()=> {
    it('has a working GET / route', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    })
  });
})