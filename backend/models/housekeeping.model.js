const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const housekeepingSchema = new Schema({

  userId:{type: String, required: true}, 
  data: {type: String, required: false},
  text: {type: String, required: false},
  status: {type: String, required: true},
  text: {type: String, required: false},  
  data: {type: String, required: false},
  
}, {
  timestamps: true,
});

const housekeeping = mongoose.model('housekeeping', housekeepingSchema);

module.exports = housekeeping;