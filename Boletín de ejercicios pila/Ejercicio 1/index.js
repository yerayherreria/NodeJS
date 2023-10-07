/* Ejercicio 1: Entendiendo la Pila de Llamadas

En este ejercicio, vamos a analizar la pila de llamadas en JavaScript.

Escribe una función llamada sumar que tome dos números como argumentos y devuelva su suma.

Llama a la función sumar(5, 3) y observa cómo se comporta la pila de llamadas. Escribe los pasos en papel o en un editor de texto.

Luego, modifica la función sumar para que llame a otra función llamada restar que tome dos números y devuelva su resta.

Llama a sumar(8, 4) y observa cómo se comporta la pila de llamadas nuevamente. Anota los pasos. */

function sumar(num1,num2){
    return num1+num2;
}

console.log(sumar(5,3));

//Lo primero que hace es cargar el código de la funcion principal en Call Stack,despues carga el registro de la suma,se agrega los datos recogidos a la pila de llamada y cuando se realiza el calculo se elimina de la pila
let restar = (num1,num2) => num1-num2;
function sumar2(num1,num2){
    return restar(num1,num2);
}

console.log(sumar2(8,4));
