const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mote:{
        type:String,
        required:true
    },
    isCabron:{
        type:Boolean,
        required:true
    }
})

module.exports=mongoose.model("Teacher",teacherSchema);