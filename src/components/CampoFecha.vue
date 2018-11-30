<template>
  <Contenedor :etiqueta="etiqueta">
    <b-form-input
      type="date"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/Campo'
import Contenedor from '@/components/Contenedor'
export default {
  name: 'CampoFecha',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>