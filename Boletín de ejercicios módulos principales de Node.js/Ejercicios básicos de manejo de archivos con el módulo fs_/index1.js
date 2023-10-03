const fs = require("fs");
//1
fs.appendFile("nuevoarchivo.txt", "Hola mundo", function (err) {
    if (err) {
        console.log("No funciona"); 
    }
});

//2
fs.readFile("nuevoarchivo.txt", function(err, data) {
    console.log(data.toString());
});

//3
fs.writeFile("nuevoarchivo.txt","¡Esto es genial!", error => {
    if (error)
      console.log(error)
    else
      console.log('El archivo fue creado')
  });

//4
fs.unlinkSync("nuevoarchivo.txt");