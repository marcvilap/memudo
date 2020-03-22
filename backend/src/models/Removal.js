const mongoose=require('mongoose');
const {Schema} = mongoose;

const RemovalSchema = new Schema({

    origin:{type:String},
    destination:{type:String},
    kilometers:{type:String},
    origin_floor:{type:String},
    destination_floor:{type:String},
    date:{type:Date,default:Date.now},
    estances:{type:String},
    estances_detail:
    [{ 
        room:{type:Number,default: 0},
        dinning:{type:Number,default: 1},
        kitchen:{type:Number},
        bath:{type:Number},
        receiver:{type:Number},
        garden:{type:Number}

    }]  
    


});

module.exports=mongoose.model('Removal',RemovalSchema);