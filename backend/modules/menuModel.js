const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: [true, 'A item must have a id'],
    },
    name:{
        type:String,
        required: [true, 'A item must have a name'],
    },
    unitPrice: {
        type: Number,
        required: [true, 'A tour must have a uniteprice']
      },
    imageUrl:{
        type :String,

    },
    ingredients:[
        {
            type:String
        }
    ],
    soldOut:{
        type:Boolean
    }

})
const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu