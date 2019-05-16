const mongoose = require('mongoose');

const { Schema } = mongoose;

const raidSchema = new Schema({
  name: String,
});

mongoose.model('raid', raidSchema);
