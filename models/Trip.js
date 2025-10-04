const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  date: String,
  distance: Number,
  fuel: Number,
  cost: Number,
  start: String,
  end: String,
  odometer: Number,
  notes: String
});

module.exports = mongoose.model('Trip', tripSchema);
