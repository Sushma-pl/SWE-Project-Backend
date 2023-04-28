const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true
    },

    type_of_alumni: {
      type: String,
      required: true
    },

    mentor: {
      type: String,
      required: true
    },

    thesis: {
      type: String
    },
    graduation_year: {
      type: Date
    },
    present_position: {
      type: String
    }
  });
  
  module.exports = Alumni = mongoose.model('alumni', AlumniSchema);