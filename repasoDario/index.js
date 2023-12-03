const express = require("express");
const app = express();
const morgan = require("morgan");
const brandRouter = require("./routes/brand");
const productRouter = require("./routes/product");

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

async function main() {
    await mongoose.connect("mongodb+srv://yerayherreria:yerayherreria@cluster0.hce5dpg.mongodb.net/");
    console.log("Conectado")
  }
  
main().catch((err) => console.log(err));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/brand",brandRouter);
app.use("/product",productRouter);

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});