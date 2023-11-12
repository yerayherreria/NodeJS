const express = require("express");
const Athelete = require("./models/athelete")
const app = express();
require('dotenv').config();

//Datanase conection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
  await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
  console.log("Conectado")
}

main().catch((err) => console.log(err));


app.use(express.json());

const users = [
  {id:1,name:"Usuario1"},
  {id:2,name:"Usuario2"},
  {id:3,name:"Usuario3"}
];
/*
app.get("/users", (req, res) => {
  return res.json(users);
});*/

app.post("/athelete",async (req, res) => {
  const athelete = req.body;
  const newAthelete = new Athelete(athelete);
  try{
    await newAthelete.save();
    res.status(201).json(newAthelete);

  } catch (error){
    res.status(500).json({message:error});
  }
  return res.json(newAthelete);
});

app.get("/athelete",async (req,res)=>{
  try{
    const atheletes = await Athelete.find();
    res.status(200).json(atheletes);

  } catch (error){
    res.status(500).json({message:error});
  } 
  
})

app.delete("/athelete/:id",async (req,res)=>{
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
  
})

app.put("/athelete/:id",async (req,res)=>{
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
  
})

app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});