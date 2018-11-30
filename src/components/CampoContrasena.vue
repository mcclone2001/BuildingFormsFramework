<template>
  <Contenedor :etiqueta="etiqueta">
    <b-form-input
      type="password"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/Campo'
import Contenedor from '@/components/Contenedor'
export default {
  name: 'CampoContrasena',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>