const express = require("express");
const app = express();
const cors = require("cors");
const atheleteRoutes = require('./routes/athelete');

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

async function main() {
    await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
    console.log("Conectado")
  }
  
main().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/atheletes', atheleteRoutes);

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});