const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    }
});

module.exports=mongoose.model("Client",clientSchema);