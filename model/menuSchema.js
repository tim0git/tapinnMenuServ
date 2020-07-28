const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  venue_name: {
    type: String,
    required: true
  },
  venue_tables: {
    type: Number,
    required: true
  },
  menu: [
    {
      product_type: {
        type: String,
        required: true
      },
      product_description: {
        type: String,
        required: true
      },
      product_price: {
        type: Number,
        required: true
      },
      product_abv: {
        type: Number,
        required: true
      },
      options: [
        {
          product_type: {
            type: String,
            required: true
          },
          product_description: {
            type: String,
            required: true
          },
          product_price: {
            type: Number,
            required: true
          },
          product_abv: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Menu = mongoose.model('menu', MenuSchema);
