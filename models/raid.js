const mongoose = require('mongoose');

const { Schema } = mongoose;

const raidSchema = new Schema({
  name: String,
  time: String,
  pokemonId: Number,
  user: { id: String, username: String },
  guests: Number,
});

mongoose.model('raid', raidSchema);
