# bff-bsv

> a framework to build spa with forms in bootstrap view

## TO DO
- [ ] Desglosar clase Props en multiples clases dentro de una carpeta para poder importarse como coleccion de clases
- [ ] Extraer tablas de mapeo a archivos independientes
- [ ] Crear coleccion de clases para los componentes vue
- [ ] Hacer que el objeto de components del form se llene con un foreach que recorra la coleccion de clases de los componentes de vue

- [ ] Expandir JSON de definicion de formularios (echar un ojo a XMLForms)
- [ ] Definir JSON para describir la interaccion entre los formularios
- [ ] Hacer un editor visual para la creacion de los formularios

## Glosario
Un PROCESO se describe por DOCUMENTOS, su flujo(requisitos para activar el siguiente paso del proceso) y los ACTORES que INTERACTUAN con cada DOCUMENTO
	Los ACTORES son los usuarios, sistemas externos, y otros que interactuan con el sistema
	Las INTERACCIONES son VER, ELABORAR, REVISAR, AUTORIZAR

Un DOCUMENTO se divide en FORMATO y REGISTRO


El FORMATO se divide en su REPRESENTACION VISUAL y en sus RESTRICCIONES

El FORMATO se compone de CAMPOS y define el flujo(requisitos para activar el siguiente paso del proceso) y los ACTORES que INTERACTUAN con cada CAMPO


Un FORMATO se define en un JSON, el JSON se encapsula en una CLASE DE DATOS, la clase de datos se usa para crear un COMPONENTE

JSon > Clase de Datos > Componente

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
