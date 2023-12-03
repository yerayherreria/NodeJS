const Brand = require("../models/brand");

const getBrand = async (req,res) => {
    try{
        const brand = await Brand.find();
        res.status(200).json(brand);
    } catch(err){
        res.status(500).json({message:err});
    }
}

const addBrand = async (req,res) => {
    const brand = req.body;
    const newBrand = new Brand(brand);
    try{
        await newBrand.save();
        res.status(201).json(newBrand);
    } catch(err){
        res.status(500).json({message:err});
    }
}

const deleteBrand = async (req,res) => {
    const id = req.params.id;
    if(id){
        try{
            const brand = await Brand.findByIdAndDelete(id);
            res.status(204).json(brand);
        }catch(err){
            res.status(500).json({message:err});
        }
    } else {
        res.status(400).json({message:"Id not valid"});
    }
}

const editBrand = async (req,res) => {
    const body = req.body;
    const id = req.params.id;
    if(id){
        try{
            const brand = await Brand.findByIdAndUpdate(id,body);
            res.status(200).json(brand);
        }catch(err){
            res.status(500).json({message:err});
        }
    } else {
        res.status(400).json({message:"Id not valid"});
    }
}

module.exports = {getBrand,addBrand,deleteBrand,editBrand};