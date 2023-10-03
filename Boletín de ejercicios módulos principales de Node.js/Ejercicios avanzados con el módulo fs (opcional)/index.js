//1
const fs = require('fs');

fs.readdir('C:\\Users\\Yeray\\Desktop\\', (err, archivos) => {
    if (err) throw err;
  
    console.log(archivos);
});

//2
const readStream = fs.createReadStream(origen);
const writeStream = fs.createWriteStream(destino);

readStream.pipe(writeStream);

readStream.on('error', console.error);
writeStream.on('error', console.error);

readStream.on('close', () => {
    console.log('Archivo copiado exitosamente');
});