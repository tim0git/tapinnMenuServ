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
      type: {
        type: String,
        required: true
      },
      products: [
        {
          name: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          abv: {
            type: Number,
            required: true
          },
          description: {
            type: String,
            required: true
          },
          stock: {
            type: Boolean,
            required: true
          },
          image_url: {
            type: String,
            required: true
          },
          options: [
            {
              name: {
                type: String,
                required: true
              },
              price: {
                type: Number,
                required: true
              }
            }
          ]
        }
      ],
      type_image_url: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Menu = mongoose.model('menu', MenuSchema);