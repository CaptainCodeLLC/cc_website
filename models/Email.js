const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
  email: String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Emails', emailSchema);