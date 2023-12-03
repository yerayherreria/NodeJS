const express = require("express");
const app = express();
const morgan = require("morgan");
const teacherRouter = require("./router/teacher")
const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

const main = async() => {
    try{
        await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
        console.log("conectado");
    } catch(err){
        console.log(err);
    }
}
main();


app.use(express.json());
app.use(morgan("tiny"));
app.use("/teacher",teacherRouter);
app.listen(3000,()=>{
    console.log("3000 escuchando jefe")
})