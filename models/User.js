const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  comments: String,
  date: { type: Date, default: Date.now }
});

mongoose.model('Users', userSchema);