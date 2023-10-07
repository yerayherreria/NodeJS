/* En este ejercicio, vamos a tratar con errores en la pila de llamadas.

Crea una función llamada dividir que tome dos números como argumentos y devuelva su división.

Llama a dividir(10, 0) y observa qué sucede. Deberías obtener un error de división por cero. ¿Cómo se maneja este error en la pila de llamadas?

Modifica la función dividir para manejar el caso de división por cero y lanzar una excepción personalizada.

Llama a dividir(10, 0) nuevamente y observa cómo se maneja ahora el error. */


function division(num1,num2){
    if(num1==0 || num2==0){
        throw new Error("Error division 0.")
    }
    return num1/num2;
}

console.log(division(10,0));

//Llama a la función division,le pasa los valores,comprueba si hay alguno =0,salta la exception,se sale de la funcion y muestra el mensaje.