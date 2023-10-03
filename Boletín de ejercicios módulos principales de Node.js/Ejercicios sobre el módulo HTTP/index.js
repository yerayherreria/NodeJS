
//8
/*
const http = require("http");
const servidor = http.createServer(function(req, res, next) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>¡Hola desde mi servidor!</h1>");
    return res.end();
});

servidor.listen(3000, function() {
    console.log("Esta funcionado.");
});*/

//9
const http = require("http");
const servidor = http.createServer(function(req, res, next) {
    const url = req.url;

    let responseText = '';
    if (url === '/hola') {
      responseText = '¡Hola desde mi servidor! URL: /hola';
    } else if (url === '/adios') {
      responseText = '¡Hola desde mi servidor! URL: /adios';
    } else {
      responseText = '¡Hola desde mi servidor!';
    }
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>¡Hola desde mi servidor!</h1>");
    return res.end(responseText);
});

servidor.listen(3000, function() {
    console.log("Esta funcionado.");
}); 