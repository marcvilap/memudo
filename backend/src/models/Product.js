const mongoose=require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({

    name:{type:String},
    length:{type:String},
    height:{type:String},
    width:{type:String},
    weight:{type:String} 


});

module.exports=mongoose.model('Product',ProductSchema);