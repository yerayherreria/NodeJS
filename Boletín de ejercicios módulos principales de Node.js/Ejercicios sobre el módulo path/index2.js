const path = require("path");

//1
let ruta="/test/test1//2slashes/1slash/tab/..";
console.log(path.normalize(ruta));

//2
let ruta1="/first";
let ruta2="second";
let ruta3="something";
let ruta4= "then";
console.log(path.join(ruta1, ruta2, ruta3, ruta4));

//3
let archivo="first.js"
console.log(path.resolve("first.js"));

//4
let nombreArchivo= "main.js";
console.log(path.extname("main.js")); 
