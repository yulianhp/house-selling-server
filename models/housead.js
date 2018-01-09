const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/housell', { useMongoClient: true });
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;


const houseadSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: String,
  status: {
    type: String,
    default: 'not done'
  }
});

var HouseAd = mongoose.model('HouseAd', houseadSchema);

module.exports = HouseAd;