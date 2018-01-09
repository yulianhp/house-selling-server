const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/housell', { useMongoClient: true });
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;