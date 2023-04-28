const mongoose = require('mongoose');
const { Schema } = mongoose;

const MentorSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    post: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    // website links 
  });
  
  const Mentor = mongoose.model('alumni', MentorSchema)
  Mentor.createIndexes()
  module.exports = Mentor