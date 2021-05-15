const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodOrderSchema = new Schema({
    userId: { type: String, reqired: true },
    food_name: { type: String, required: true },
    food_type: { type: String, required: true },
    food_price: { type: String, required: true },
    status:{type: String, required: true },
},
    {
        timestamps: true,
    });

const FoodOrder = mongoose.model('FoodOrder', foodOrderSchema);

module.exports = FoodOrder;