<template>
  <Contenedor :etiqueta="d_etiqueta">
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
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
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
  watch: {
    valorMinimo (to, from) {
      this.d_valorMinimo = to
    },
    valorMaximo (to, from) {
      this.d_valorMaximo = to
    },
    incremento (to, from) {
      this.d_incremento = to
    }
  },
  components: { Contenedor }
}
</script>