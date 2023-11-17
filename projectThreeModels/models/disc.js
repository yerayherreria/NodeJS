const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscSchema = new Schema({
    name: String,
    numSongs: Number,
    category: String,
    duration: Number
})

module.exports = mongoose.model("Disc",DiscSchema);