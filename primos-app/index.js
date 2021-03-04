const primos = require('primos-radocode-module');

var args = process.argv.slice(2);
const primosResult = primos.getPrimos(args[0]);
console.log(primosResult)