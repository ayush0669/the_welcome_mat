const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    menu_name: { type: String, required: true },
    menu_type: { type: String, required: true },
    menu_price: { type: String, required: true },
    menu_imglink: {type:String, required:true}
},
    {
        timestamps: true,
    });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;