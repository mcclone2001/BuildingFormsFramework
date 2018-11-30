<template>
  <Contenedor :etiqueta="etiqueta">
    <b-form-input 
      type="range"
      v-model="d_valor"
      v-on:change="dispararEvento"
      :min="d_valorMinimo"
      :max="d_valorMaximo"
      :step="d_incremento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/Campo'
import Contenedor from '@/components/Contenedor'
export default {
  name: 'CampoRango',
  mixins: [ Campo ],
  props: [
    'valorMinimo',
    'valorMaximo',
    'incremento'
  ],
  data: function () {
    return {
      d_valorMinimo: this.valorMinimo,
      d_valorMaximo: this.valorMaximo,
      d_incremento: this.incremento
    }
  },
  components: { Contenedor }
}
</script>