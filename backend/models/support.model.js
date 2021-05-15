const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supportSchema = new Schema({
  userId:{ type: String, required: true },  
  status:{type: String, required: true },
  data:{type: String, required: false},
  furtherdetails:{ type: String, required: false },
  
}, 
{
  timestamps: true,
});

const Support = mongoose.model('Support', supportSchema);

module.exports = Support;