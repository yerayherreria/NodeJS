const Animal = require("../models/animal");

const getAnimal = async (req,res) =>{
    try{
        const animal = await Animal.find();
        res.status(200).json(animal);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const postnimal = async (req,res) =>{
    const body = req.body;
    const newAnimal = new Animal(body);
    try{
        await newAnimal.save();
        res.status(201).json(newAnimal);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const putAnimal = async (req,res) =>{
    const body = req.body;
    const id = req.params.id;
    if(id){
        try{
            const animal = await Animal.findByIdAndUpdate(id,body);
            res.status(200).json(animal);
        }catch(err){
            res.status(500).json({message:err});
        }
    }else {
        res.status(400).json({message:"Id not valid"});
    }
}

const deleteAnimal = async (req,res) =>{
    const id = req.params.id;
    if(id){
        try{
            const animal = await Animal.findByIdAndDelete(id);
            res.status(204).json(animal);
        }catch(err){
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:"Id not valid"});
    }
}

module.exports = {getAnimal,postnimal,putAnimal,deleteAnimal};