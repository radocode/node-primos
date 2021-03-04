# node-primos

Modulo que calcula numeros primos.

Para ejecutar local con node y npm:

npm install

Luego, para probar el modulo, se puede ejecutar el app asi:

npm run primos 7

Esto arrojara la estructura deseada:

[ 7, 5, 3, 2, 1 ]

Para ejecutar en Docker:

Primero se habe build

docker build -t primos-app .

Luego se ejecuta asi, por ejemplo:
docker run -t primos-app sh -c "npm run primos 17"
