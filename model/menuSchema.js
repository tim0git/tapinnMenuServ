const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  venue_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Venue_name: {
    type: String,
    required: true
  },
  menu_items: [
    {
      school: {
        type: String,
        required: true
      },
      qualification: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('menu', MenuSchema);
