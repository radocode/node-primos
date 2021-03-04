const primos = require('primos');

var args = process.argv.slice(2);
const primosResult = primos.getPrimos(args[0]);
console.log(primosResult)