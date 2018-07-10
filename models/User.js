const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

mongoose.model('users', userSchema);