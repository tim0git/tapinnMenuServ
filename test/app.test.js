const { app, server } = require('../app');
const request = require('supertest');

const expect = require('chai').expect;

describe('APP TESTS', () => {
  describe('GET /api', () => {
    it('responds with status 200 for GET /api', (done) => {
      request(app)
        .get('/api?venue_id=1')
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id', 1);
          expect(body).to.have.property('venue_name', 'test venue');
          expect(body).to.have.property('venue_tables', 6);
          expect(body).to.have.property('menu');
          done();
        })
        .catch((err) => done(err));
    });

    after((done) => {
      server.close();
      done();
    });
  });

  describe('POST /api', () => {
    it('responds status 200 for POST /api', (done) => {
      request(app)
        .post('/api')
        .send({
          venue_id: 4,
          venue_name: 'test venue',
          venue_tables: 5,
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
              ],
              type_image_url:
                'https://www.drinkstuff.com/productimg/47278_large.jpg',
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
                    { name: 'Buy the bottle', price: 5.9 },
                  ],
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
                    { name: 'Buy the bottle', price: 4.9 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
          ],
        })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id');
          expect(body).to.have.property('venue_name', 'test venue');
          expect(body).to.have.property('venue_tables', 5);
          expect(body).to.have.property('menu');
          done();
        })
        .catch((err) => done(err));
    });

    after((done) => {
      server.close();
      done();
    });
  });

  describe('POST /api', () => {
    it('responds status 200 for POST /api', (done) => {
      request(app)
        .post('/api')
        .send({
          venue_id: 5,
          venue_name: 'another test venue',
          venue_tables: 5,
          menu: [
            {
              type: 'lager',
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
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
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
              ],
              type_image_url:
                'https://www.drinkstuff.com/productimg/47278_large.jpg',
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
                    { name: 'Buy the bottle', price: 5.9 },
                  ],
                },
                {
                  name: 'RIOJA',
                  price: 6.8,
                  abv: 9,
                  description: 'piss in a bottle but darker',
                  stock: true,
                  image_url:
                    'https://www.williamashley.com/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/2/V/2VINRIE0900_001_29.jpg',
                  options: [
                    { name: 'Half Glass', price: -3.4 },
                    { name: 'Buy the bottle', price: 4.9 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Vodka',
              products: [
                {
                  name: 'Vodka',
                  price: 5,
                  abv: 40,
                  description: 'MMMMMMMM Fermentation',
                  stock: true,
                  image_url:
                    'https://www.ravereviews.org/wp-content/uploads/2018/10/Murlarkey-Divine-Clarity.jpg',
                  options: [
                    { name: 'Double', price: 2 },
                    { name: 'Double with Taurine', price: 2.5 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Gin',
              products: [
                {
                  name: 'Gin',
                  price: 6.8,
                  abv: 9,
                  description:
                    'The Drink you attach your personality to on facebook these days',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'add a tonic', price: +2 },
                    { name: 'Make it a double', price: 3.2 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Real Ale',
              products: [
                {
                  name: 'Beardy Drinkers Fizzy Drink',
                  price: 6.8,
                  abv: 9,
                  description: 'Froth to stick in your muzzy',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Craft',
              products: [
                {
                  name: 'Real Ale but for Hipsters',
                  price: 6.8,
                  abv: 9,
                  description: 'For when real ale is mot hipster enough',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Cider',
              products: [
                {
                  name: 'Prick in Hand',
                  price: 6.8,
                  abv: 9,
                  description:
                    'whenever she pricks her hand what does she put it in.....',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Whiskey',
              products: [
                {
                  name: 'Jack Daniels',
                  price: 6.8,
                  abv: 9,
                  description: 'is it jacks or is it daniels..',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'double', price: 2 },
                    { name: 'with coke', price: 0.8 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Soft drinks',
              products: [
                {
                  name: 'Pepsi',
                  price: 2,
                  abv: 9,
                  description: 'For when they do not have coke',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'Pint', price: 1 },
                    { name: 'Bottomless', price: 2.5 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Hot Drinks',
              products: [
                {
                  name: 'Tea',
                  price: 2.5,
                  abv: 9,
                  description: 'Breakfast Tea',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [{ name: 'Pot', price: 1.5 }],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Starters',
              products: [
                {
                  name: 'Mix Kebab',
                  price: 5.8,
                  abv: 9,
                  description: 'All the spicy meat',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'sharer for 2', price: 2.6 },
                    { name: 'sharer for 3', price: 4 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Snacks',
              products: [
                {
                  name: 'Pipers Crisps',
                  price: 1.8,
                  abv: 9,
                  description: 'Because they are the best crisps',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'large bag', price: 1.2 },
                    { name: 'nose bag', price: 40 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Mains',
              products: [
                {
                  name: 'Dirty Burger',
                  price: 9.8,
                  abv: 9,
                  description: 'You know you want it',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'with chips', price: 2.2 },
                    { name: 'add bacon', price: 0.4 },
                    { name: 'add cheese', price: 0.9 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Sides',
              products: [
                {
                  name: 'BBQ Sauce',
                  price: 0.4,
                  abv: 9,
                  description: 'Because some places charge for this',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
            {
              type: 'Desserts',
              products: [
                {
                  name: 'Cookie Dough with ice cream',
                  price: 4.8,
                  abv: 9,
                  description: 'Yum',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'Extra Scoop', price: 0.4 },
                    { name: 'sharer for 2', price: 2 },
                  ],
                },
              ],
              type_image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrTqHhQ7gaCHW0KjQG3AzkO-OK714rVIlXhg&usqp=CAU',
            },
          ],
        })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.property('_id');
          expect(body).to.have.property('venue_name', 'another test venue');
          expect(body).to.have.property('venue_tables', 5);
          expect(body).to.have.property('menu');
          done();
        })
        .catch((err) => done(err));
    });

    after((done) => {
      server.close();
      done();
    });
  });
});
