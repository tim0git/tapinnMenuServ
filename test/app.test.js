const { app, server } = require('../app');
const request = require('supertest');

const expect = require('chai').expect;

describe('APP TESTS', () => {
  describe('GET /api', () => {
    it('responds with status 200 for GET /api', done => {
      request(app)
        .get('/api?venue_id=1')
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id', 1);
          expect(body).to.have.property('venue_name', 'test venue');
          expect(body).to.have.property('venue_tables', 5);
          expect(body).to.have.property('menu');
          done();
        })
        .catch(err => done(err));
    });

    after(done => {
      server.close();
      done();
    });
  });

  describe('POST /api', () => {
    it('responds status 200 for POST /api', done => {
      request(app)
        .post('/api')
        .send({
          venue_id: 1,
          venue_name: 'test venue',
          venue_tables: 5,
          menu: [
            {
              product_type: 'test type',
              product_description: 'test desc',
              product_price: 5.0,
              product_abv: 4.8,
              options: [
                {
                  product_type: 'option test',
                  product_description: 'option test',
                  product_price: 5.0,
                  product_abv: 4.8
                },
                {
                  product_type: 'option test 2',
                  product_description: 'option test 2',
                  product_price: 5.0,
                  product_abv: 4.8
                }
              ]
            },
            {
              product_type: 'test type 2',
              product_description: 'test desc 2',
              product_price: 5.0,
              product_abv: 4.8,
              options: []
            }
          ]
        })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id', 1);
          expect(body).to.have.property('venue_name', 'test venue');
          expect(body).to.have.property('venue_tables', 5);
          expect(body).to.have.property('menu');
          done();
        })
        .catch(err => done(err));
    });

    after(done => {
      server.close();
      done();
    });
  });
});
