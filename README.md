# bff-bsv

> a framework to build spa with forms in bootstrap view

## TO DO
- [ ] Hacer un editor visual para la creacion de los formularios
	- [ ] Refactorizar el editor para hacer codigo limpio
		- [X] Crear DataForm
		- [ ] ¿Cómo extraer los valores del form? (model?)
		- [ ] Definir formularios para agregar campo para cada tipo de campo y hacerlo en archivos json que por convencion tengan nombre de archivo igual al tipo de campo (meterlos en assets)
		- [ ] Que el contenido del popup se actualice dinamicamente
	- [ ] Crear componentes para edición/visualización de propiedades (que se ajuste a las necesidades de cada campo)
	- [ ] Refactorizar modal de agregar campo para reusar componentes de edición/visualización de propiedades
	- [ ] Crear clase abstracta de guardado
	- [ ] Crear clase especifica de guardado en localstorage (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
	- [ ] Guardar formularios en localstorage
- [ ] Hacer que la carga de los formularios pueda ocurrir de forma asincrona y que se vayan cacheando en memoria
- [ ] Expandir JSON de definicion de formularios (echar un ojo a XMLForms)
- [ ] Definir JSON para describir la interaccion entre los formularios
- [X] Renombrar/refactorizar classes/Props a algo mas apropiado (InterpreteJSON)
- [X] Verificar que todos los componentes tengan watchers porque VUE los reusa por eficiencia
- [X] Desglosar clase Props en multiples clases dentro de una carpeta para poder importarse como coleccion de clases
- [X] Extraer tablas de mapeo a archivos independientes
- [X] Crear coleccion de clases para los componentes vue
- [X] Hacer que el objeto de components del form se llene con un foreach que recorra la coleccion de clases de los componentes de vue (al final simplemente usamos ComponentesCollection, es necesario optimizarlo para solo cargar los componentes que son necesarios de acuerdo a la propiedad campos)


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
