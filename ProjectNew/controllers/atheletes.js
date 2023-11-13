const Athelete = require("../models/athelete");

const getAthelete = async (req,res)=>{
    try{
      const atheletes = await Athelete.find();
      res.status(200).json(atheletes);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addAthelete = async (req, res) => {
    const athelete = req.body;
    const newAthelete = new Athelete(athelete);
    try{
      await newAthelete.save();
      res.status(201).json(newAthelete);
  
    } catch (error){
      res.status(500).json({message:error});
    }
    return res.json(newAthelete);
};

const deleteAthelete =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const atheletes = await Athelete.findByIdAndDelete(id);
        res.status(200).json(atheletes);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putAthelete = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const atheletes = await Athelete.findByIdAndUpdate(id,body);
        res.status(200).json(atheletes);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getAthelete,addAthelete,deleteAthelete,putAthelete};