<template>
  <Contenedor :etiqueta="d_titulo">
    <template v-for="campo in d_campos">
          <component 
            :is="MapeoNombreClaseDeDatosANombreComponente[campo.constructor.name]" 
            :key="campo.UUID" 
            :parametros="campo" 
            v-bind="campo"
            v-on:change="dispararEvento(campo,$event)"></component>
    </template>
  </Contenedor>
</template>

<script>
import * as Components from '@/components/ComponentsCollection'
import MapeoNombreClaseDeDatosANombreComponente from '@/classes/catalogs/MapeoNombreClaseDeDatosANombreComponente'

let data = function () {
  return {
    d_titulo: this.titulo,
    d_campos: this.campos,
    MapeoNombreClaseDeDatosANombreComponente
  }
}

export default {
  name: 'Form',
  components: Components, // TO DO - Analizar que componentes son necesarios de acuerdo a la propiedad campos y filtrar que solo esos se carguen
  props: [
    'titulo',
    'campos'
  ],
  data: data,
  watch: {
    // https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data/42134176
    // ten ese articulo en consideracion cuando uses objetos mas profundos

    // este componente se reusa al navegar entre formularios, por eso debemos estar pendientes de la propiedad route
    '$route' (to, from) {
      this.d_titulo = this.titulo
      this.d_campos = this.campos
    }
  }
}
</script>