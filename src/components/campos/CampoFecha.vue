<template>
  <Contenedor :etiqueta="d_etiqueta">
    <b-form-input
      type="date"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
export default {
  name: 'CampoFecha',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>