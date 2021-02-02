const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('one test', ()=> {
  it('passes a test', ()=> {
    expect(true).to.equal(true);
  });
});

describe('Routes', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('GET /', ()=> {
    it('has a working GET / route', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    })
  });
  describe('GET /api/movies', ()=> {
    it('gets all movies from api', async()=> {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
    })
  })
  describe('GET /api/actors', ()=> {
    it('gets all actors from api', async()=> {
      const response = await app.get('/api/actors');
      expect(response.status).to.equal(200);
    })
  })
})