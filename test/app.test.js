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
          venue_id: 57,
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
                {
                  name: 'Pink Vodka',
                  price: 4.8,
                  abv: 40,
                  description: 'vodka but for girls',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: 'Double', price: 2.5 },
                    { name: 'Double with Red Bull', price: 3.5 },
                    { name: 'coke', price: 0.8 },
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
                {
                  name: 'More Gin',
                  price: 7.8,
                  abv: 40,
                  description: 'becase one gin isnt enough',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: 'Double', price: 2.5 },
                    { name: 'Tonic', price: 1.5 },
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
                {
                  name: 'For real northern men',
                  price: 7.8,
                  abv: 5.4,
                  description: 'Tastes like whippets',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
                {
                  name: 'The wizards Sleeve',
                  price: 7.8,
                  abv: 5.4,
                  description: 'It is very wet',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
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
                {
                  name: 'Corbyns Cream',
                  price: 7.8,
                  abv: 5.4,
                  description: 'A drink for the comrades',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: '1/2 Pint', price: -2.5 },
                    { name: '1/3 Pint', price: -1.5 },
                  ],
                },
                {
                  name: 'Blairs Brew',
                  price: 7.8,
                  abv: 5.4,
                  description: 'looks the part but has a taste of tory',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
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
                {
                  name: 'Witches Hat',
                  price: 7.8,
                  abv: 5.4,
                  description: 'tastes of a rusty cauldron',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
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
                {
                  name: 'Bells',
                  price: 7.8,
                  abv: 5.4,
                  description: 'Ding Dong',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: 'double', price: 2 },
                    { name: 'with coke', price: 0.8 },
                  ],
                },
                {
                  name: 'Another Whiskey',
                  price: 7.8,
                  abv: 5.4,
                  description: 'Ding Dong',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
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
                  abv: 0,
                  description: 'For when they do not have coke',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'Pint', price: 1 },
                    { name: 'Bottomless', price: 2.5 },
                  ],
                },
                ,
                {
                  name: 'Orange Juice',
                  price: 2.8,
                  abv: 0,
                  description: 'taking the pith mate --- mike tyson 2020',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: 'pint', price: 2 },
                    { name: 'bottomless', price: 6 },
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
                  abv: 0,
                  description: 'Breakfast Tea',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [{ name: 'Pot', price: 1.5 }],
                },
                ,
                {
                  name: 'Coffee',
                  price: 3,
                  abv: 0,
                  description: 'The drink of rubbish first date',
                  stock: true,
                  image_url:
                    'https://honestbrew.co.uk/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=540,height=720/wp-content/uploads/2014/10/Brewdog-Punk-IPA-Can-330ml.jpg',
                  options: [
                    { name: 'latte', price: 0.6 },
                    { name: 'extra shot', price: 0.6 },
                  ],
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
                  abv: 0,
                  description: 'All the spicy meat',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'sharer for 2', price: 2.6 },
                    { name: 'sharer for 3', price: 4 },
                  ],
                },
                {
                  name: 'Tandoori Chicken',
                  price: 5.8,
                  abv: 0,
                  description: 'All the spicy chicken',
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
                  abv: 0,
                  description: 'Because they are the best crisps',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'large bag', price: 1.2 },
                    { name: 'nose bag', price: 40 },
                  ],
                },
                {
                  name: 'Nuts',
                  price: 1.8,
                  abv: 0,
                  description: 'Peanuts',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'salted', price: 0 },
                    { name: 'roasted', price: 0 },
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
                  abv: 0,
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
                {
                  name: 'Fish and chips',
                  price: 9.8,
                  abv: 0,
                  description: 'Chish and Fips',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'large chips', price: 1.2 },
                    { name: 'mushy peas', price: 1 },
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
                  abv: 0,
                  description: 'Because some places charge for this',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [],
                },
                {
                  name: 'Garlic Bread',
                  price: 1.8,
                  abv: 0,
                  description: 'Because they are the best crisps',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [{ name: 'with cheese', price: 0.6 }],
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
                  abv: 0,
                  description: 'Yum',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [
                    { name: 'Extra Scoop', price: 0.4 },
                    { name: 'sharer for 2', price: 2 },
                  ],
                },
                {
                  name: 'Profiteroles',
                  price: 4.8,
                  abv: 0,
                  description: 'The only dessert Jeff likes',
                  stock: true,
                  image_url:
                    'https://cdn11.bigcommerce.com/s-1ev3losdup/images/stencil/1280x1280/products/9816/4507/apivhqtcm__08307.1585226108.jpg?c=2&imbypass=on',
                  options: [{ name: 'sharer for 2', price: 2 }],
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
