<template>
  <Contenedor etiqueta="Contenedor">
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
    d_campos: this.campos,
    MapeoNombreClaseDeDatosANombreComponente
  }
}

export default {
  name: 'Form',
  components: Components, //TO DO - Analizar que componentes son necesarios de acuerdo a la propiedad campos y filtrar que solo esos se carguen
  props: [
    'titulo',
    'campos'
  ],
  data: data
}
</script>