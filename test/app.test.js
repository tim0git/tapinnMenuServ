const { app, server } = require('../app');
const request = require('supertest');

const expect = require('chai').expect;

describe('GET /api', () => {
  it('responds with all available endpoints', done => {
    request(app)
      .get('/api')
      .expect(200)
      .then(({ body }) => {
        done();
      })
      .catch(err => done(err));
  });

  after(done => {
    server.close();
    done();
  });
});
