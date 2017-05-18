var mongoose = require('mongoose');

var beersSchema = mongoose.Schema({
  id: Number,
  categoryId: Number,
  category: {
  id: Number,
  name: String,
  createDate: Date
  },
  name: String,
  shortName: String,
  description: String,
  ibuMin: Number,
  ibuMax: Number,
  abvMin: Number,
  abvMax: Number,
  srmMin: Number,
  srmMax: Number,
  ogMin: Number,
  fgMin: Number,
  fgMax: Number,
  createDate: Date,
  updateDate: Date
});

var Beers = mongoose.model('Beers', beersSchema);

module.exports = Beers;
