const Product = require("../models/product");

const getSinId = async(req,res) => {
    try{
      const Products = await Product.find();
      res.status(200).json(Products);
    }catch(err){
      res.status(500).json({message:err});
    }
  
  }

module.exports = {getSinId,}