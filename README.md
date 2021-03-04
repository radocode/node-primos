# node-primos

Modulo que calcula numeros primos.

### Estructura del proyecto:

    .
    ├── primos-app                # app de testing para probar modulo
    ├── primos                    # Modulo primos
    ├── LICENSE
    └── README.md

Este repositorio viene con un app para probar el modulo, que se encuentra en la carpeta `primos-app`

Dentro de la carpeta `primos-app`, se puede ejecutar local con node y npm:

### `npm install`

Luego, para probar el modulo, se puede ejecutar el app asi:

### `npm run primos 7`

Esto arrojara la estructura deseada:

### `[ 7, 5, 3, 2, 1 ]`

-----------------

Tests Unitarios:

Para ejecutar los tests unitarios, dentro de la carpeta `primos` ejecutar:

### `npm run test`

-----------------

Para ejecutar en Docker, dentro de la carpeta `primos-app`:

Primero se hace build

### `docker build -t primos-app .`

Luego se ejecuta asi, por ejemplo:
### `docker run -t primos-app sh -c "npm run primos 7"`

-----------------

El modulo esta publicado en el registry publico de NPM aqui:

https://www.npmjs.com/package/primos-radocode-module
