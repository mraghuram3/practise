var mongoose = require('mongoose');

mongoose.connect('mongodb://mraghuram:zxcvZXCV@9@ds161069.mlab.com:61069/dump');

var Schema = mongoose.Schema;

// create a schema
var placeSchema = new Schema({
  id: Number;
  name: String,
  category: String,
  rating: Number,
  latitude: Number,
  longitude: Number
});

// the schema is useless so far
// we need to create a model using it
var Place = mongoose.model('Place', placeSchema);

// make this available to our users in our Node applications
module.exports = Place;