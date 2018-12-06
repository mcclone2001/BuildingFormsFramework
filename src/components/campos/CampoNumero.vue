<template>
  <Contenedor :etiqueta="etiqueta">
    <b-form-input
      type="number"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
export default {
  name: 'CampoNumero',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>