function calcularArea(radio){
    return Math.PI*radio*radio;
}

function calcularCircunferencia(radio){
    return Math.PI*radio*2;
}

module.exports = {
    calcularArea,
    calcularCircunferencia
}