const Product = require("../models/product");

const getProduct = async(req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const addProduct = async(req,res)=>{
    const body = req.body;
    const newProduct = new Product(body);
    try{
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch(err){
        res.status(500).json({message:err});
    }
}

const deleteProduct = async(req,res) => {
    const id = req.params.id;
    if(id){
        try{
            const product = await Product.findByIdAndDelete(id);
            res.status(204).json(product);
        }catch(err){
            res.status(500).json({message:err});
        }
    } else {
        res.status(400).json({message:"Id not valid"});
    }
}

const editProduct = async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    if(id){
        try{
            const product = await Product.findByIdAndUpdate(id,body);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:"Id not valid"});
    }
}

module.exports={getProduct,addProduct,editProduct,deleteProduct};