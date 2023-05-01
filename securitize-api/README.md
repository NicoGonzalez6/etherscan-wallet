## Instrucciones para levantar el ambiente

- Al clonar el repo se deben completar el archivo env con el siguiente formato.

- Colocar sus credencials de postgres, y el puerto que utiliza.

```bash

DB_USER=
DB_PASSWORD=
DB_NAME=wallet-api
DB_HOST=localhost
DB_PORT=5432

API_URL = https://api.etherscan.io/api
API_KEY = API KEY

```

- Luego ejecutar los siguientes scripts para preparar el ambiente, (ejecutar las migraciones y seeds).

```bash
$ npm install

$ npm run createdb

$ npm run populatedb
```

- Ya tendremos el ambiente listo para continuar.

## Info extra

- Ejecutando los siguientes scripts podremos levantar el server local.

```bash
$ npm run start:dev
```
