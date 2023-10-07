/* Ejercicio 2: Asincronía en Node.js

En este ejercicio, exploraremos la asincronía en Node.js y cómo afecta a la pila de llamadas.

Crea una función llamada imprimirMensaje que tome un mensaje como argumento y lo imprima en la consola.

Llama a imprimirMensaje("Hola, Mundo") y observa el resultado.

Ahora, utiliza setTimeout para hacer que imprimirMensaje se llame después de 2 segundos con el mismo mensaje. ¿Cómo cambia la ejecución?

Escribe el flujo de ejecución de las llamadas y observa cómo las funciones se agregan y eliminan de la pila de llamadas. */

let imprimirMensaje = (mensaje) => console.log(mensaje);

setTimeout(imprimirMensaje(("Hola, Mundo")),2000);