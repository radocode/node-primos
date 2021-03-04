// error handling generico
const printError = function (error) {
    console.log(`['Error Interno'] ${error.name}: ${error.message}`);
}

const esPrimo = (n, i = 2) => {
    // const esPrimo = n => {
    // solucion con un for simple, se evalua desde su definicion matematica:
    // "es un numero natural mayor a 1 que tiene UNICAMENTE dos divisores positivos
    // distintos: el mismo y el 1, osea si el modulo del numero con el contador
    // es cero, no es primo, en caso contrario si lo es"
    // for (var contador = 2; contador < numero; contador++) {
    //     if (numero % contador === 0) {
    //         return false;
    //     }
    // }
    // return true;

    // solucion recursiva, la mas ñoña :) aplicamos similar definicion pero llamamos al metodo
    // de forma recursiva hasta cumplir el caso borde, divisor por divisor
    // si es menor o igual a dos,es primo. se validara previamente si es negativo
    if (n <= 2)
        return true

    // si el modulo cabe divisor i en 0, es porque no es primo
    if (n % i === 0)
        return false;

    // condicion para seguir evaluando o salirse de la recursividad, si divisor supera al numero
    // sino se asume que es primo y continua evaluando. si el contador multiplicado en si mismo
    // es mayor al numero a evaluar, se termina la recursion y el numero es primo
    if (i * i > n)
        return true;

    // continuamos la ejecucion en siguiente divisor
    return esPrimo(n, i + 1);

};

exports.getPrimos = primo => {
    try {
        // primero se valida que sea un numero natural
        if (primo <= 0) return null;
        // luego creamos un array con largo N comenzando desde el i +1
        var nums = Array.from({ length: primo }, (_, i) => i + 1)
        //filtramos el numero y luego invertimos el array
        return nums.filter((num) => esPrimo(num)).reverse();
    } catch (e) {
        // error handling
        printError(e);
        return null;
    }
}

