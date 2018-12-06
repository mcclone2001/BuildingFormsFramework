<template>
  <Contenedor :etiqueta="etiqueta">
    <b-form-input
      type="tel"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
export default {
  name: 'CampoTelefono',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>