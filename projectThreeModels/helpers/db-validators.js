const Disc = require("../models/disc");

const existsName = async (name) => {
    const nameDb = await Disc.findOne({name});

    if(nameDb){
        throw new Error(`Name ${name} already exists in database`);
    }
}

module.exports={existsName};