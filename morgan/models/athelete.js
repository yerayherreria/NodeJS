const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AtheleteSchema = new Schema({
    name: String,
    ager: Number
})

module.exports = mongoose.model("Athelete",AtheleteSchema);