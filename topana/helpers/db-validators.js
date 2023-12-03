const Disc = require("../models/teacher");

const existsMote = async (mote,{req}) => {
    const nameDb = await Disc.findOne({mote});

    if(nameDb && nameDb.id!=req.params.id){
        throw new Error(`Name ${mote} already exists in database`);
    }
}

module.exports={existsMote};