//5
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

//6
console.log(process.env);

//7
process.on('exit', () => {
    console.log('El proceso esta saliendo.');

});
