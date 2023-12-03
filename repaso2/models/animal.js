const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    }
    
});

module.exports = mongoose.model("Animals",AnimalsSchema);