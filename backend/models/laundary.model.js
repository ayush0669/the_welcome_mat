const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laundarySchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    laundaryclothCount: {
        type: Number,
        reqired: true
    },
    laundarySlot: {
        type: String,
        required: true
    },
    laundaryTask: { 
        type : Array , 
        default : [] 
    },
    status: {
        type: String, 
        required: true }
},
    {
        timestamps: true,
    });

const Laundary = mongoose.model('Laundary', laundarySchema);

module.exports = Laundary;

