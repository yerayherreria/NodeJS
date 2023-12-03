const Animal = require("../models/animal");

const existNamePUT = async(name,{req})=>{
    const nameDb = await Animal.findOne({name});

    if(nameDb && nameDb.id!=req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}

const existNamePOST = async(name,{req})=>{
    const nameDb = await Animal.findOne({name});

    if(nameDb){
        throw new Error(`Name ${name} already exists in database`);
    }
}

module.exports={existNamePUT,existNamePOST};