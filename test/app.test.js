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
    it.only('responds status 200 for POST /api', done => {
      request(app)
        .post('/api')
        .send({
          venue_id: 4,
          venue_name: 'test venue',
          venue_tables: 6,
          menu: [
            {
              type: 'larger',
              products: [
                {
                  name: 'PUNK IPA',
                  price: 7.8,
                  abv: 5.4,
                  description: 'refreshingly good drink',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 }
                  ]
                },
                {
                  name: 'ELVIS JUICE',
                  price: 6.8,
                  abv: 6.8,
                  description: 'old faithful',
                  stock: true,
                  image_url:
                    'https://cdn.shopify.com/s/files/1/2264/1213/products/BrewDog_Elvis_Juice.png?v=1580411024',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 }
                  ]
                },
                {
                  name: 'NEW ENGLAND IPA',
                  price: 8.8,
                  abv: 6.8,
                  description: 'very very nice!',
                  stock: true,
                  image_url:
                    'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/morningadvertiser.co.uk/article/2018/01/08/adnams-reveals-2018-brewing-schedule/2714406-1-eng-GB/Adnams-reveals-2018-brewing-schedule_wrbm_large.jpg',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 }
                  ]
                }
              ],
              type_image_url:
                'https://www.drinkstuff.com/productimg/47278_large.jpg'
            },
            {
              type: 'wine',
              products: [
                {
                  name: 'ROSE',
                  price: 7.8,
                  abv: 9,
                  description: 'piss in a bottle',
                  stock: true,
                  image_url:
                    'https://image.izettle.com/product/TUaUoGtdEeqoqjrVWkRLqQ-lUy5Cpz5Eeq0C9aew4CeYQ.jpeg',
                  options: [
                    { name: 'Half Glass', price: -3.9 },
                    { name: 'Buy the bottle', price: 5.9 }
                  ]
                },
                {
                  name: 'RIOCHA',
                  price: 6.8,
                  abv: 9,
                  description: 'piss in a bottle but darker',
                  stock: true,
                  image_url:
                    'https://www.williamashley.com/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/2/V/2VINRIE0900_001_29.jpg',
                  options: [
                    { name: 'Half Glass', price: -3.4 },
                    { name: 'Buy the bottle', price: 4.9 }
                  ]
                }
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU'
            }
          ]
        })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id');
          expect(body).to.have.property('venue_name', 'test venue');
          expect(body).to.have.property('venue_tables');
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
