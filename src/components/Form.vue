<template>
  <Contenedor :etiqueta="d_titulo">
    <template v-for="campo in d_campos">
          <component 
            :is="obtenerNombreDeComponente(campo.constructor.name)" 
            :key="campo.UUID" 
            v-bind="campo.parametros"
            v-model="campo.parametros.valor"
            v-on:change="dispararEvento(campo,$event)"></component>
    </template>
  </Contenedor>
</template>

<script>
import * as Campos from '@/components/CamposCollection'
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
  components: Campos, // TO DO - Analizar que componentes son necesarios de acuerdo a la propiedad campos y filtrar que solo esos se carguen
  props: [
    'titulo',
    'campos'
  ],
  data: data,
  methods: {
    dispararEvento: function (campo, evento) {
    },
    obtenerNombreDeComponente (nombreDeComponente) {
      return MapeoNombreClaseDeDatosANombreComponente[nombreDeComponente]
    }
  },
  watch: {
    // https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data/42134176
    // ten ese articulo en consideracion cuando uses objetos mas profundos

    titulo (to, from) {
      this.d_titulo = to
    },
    campos (to, from) {
      this.d_campos = to
    }
  }
}
</script>