const Client = require("../models/client");

const getClient = async(req,res) => {
    try{
        const client = await Client.find();
        res.status(200).json(client);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const addClient = async(req,res) => {
    const body = req.body;
    const newClient = new Client(body);
    try{
        await newClient.save();
        res.status(201).json(newClient);
    } catch(err) {
        res.status(500).json({message:err});
    }
}

const deleteClient = async(req,res) => {
    const id = req.params.id;
    if(id){
        const client = await Client.findByIdAndDelete(id);
        res.status(204).json(client);
    } else {
        res.status(400).json({message:"Id not valid"});
    }
}

const editClient = async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    if(id){
        try{
            const client = await Client.findByIdAndUpdate(id,body);
            res.status(200).json(client);
        }catch(err){
            res.status(500).json({message:err});
        }
    } else {
        res.status(400).json({message:"Id not valid"});
    }
}

module.exports={getClient,addClient,deleteClient,editClient};