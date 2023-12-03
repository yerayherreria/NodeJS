const express = require("express");
const app = express();
const morgan = require("morgan");
const routerAnimal = require("./routes/animal");

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

const main = async()=>{
    try{
        await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
        console.log("Connect")
    }catch(err){
        console.log(err);
    }
}

main();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/animal",routerAnimal);

app.listen(3000,()=>{
    console.log("El servidor está escuchando en el puerto 3000");
})