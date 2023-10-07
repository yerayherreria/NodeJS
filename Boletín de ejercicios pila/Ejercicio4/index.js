/* En este ejercicio, exploraremos cómo funciona el trabajo asincrónico en Node.js.

Crea una función llamada buscarEnBD que simule una búsqueda en una base de datos. Esta función debería tomar un tiempo simulado (por ejemplo, 2 segundos) antes de devolver un resultado.

Llama a buscarEnBD("Usuario123") y observa cómo se comporta la pila de llamadas mientras espera la respuesta.

Ahora, utiliza una función de devolución de llamada (callback) para manejar el resultado de buscarEnBD. La función de devolución de llamada debería imprimir el resultado en la consola.

Llama a buscarEnBD("Usuario456", callback) y observa cómo se maneja la respuesta asincrónica. */

function buscarEnBD(usuario, callback) {
    setTimeout(() => {
        console.log(`Búsqueda completada para ${usuario}`);
        if (callback) {
            callback(usuario);
        }
    }, 2000);
}

function callback(usuario) {
    console.log(`Resultado de la búsqueda para ${usuario}`);
}

console.log(buscarEnBD("Usuario456", callback));

//Llama a la funcion,le carga los datos pasa al setTimeout,printa llama callback,se mete en callback,printa,sale de callback,sale del setTimeout,printa todos despues de 2 segundos y sale.