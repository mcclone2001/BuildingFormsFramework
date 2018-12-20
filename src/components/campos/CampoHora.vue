<template>
  <Contenedor :etiqueta="d_etiqueta">
    <b-form-input
      type="time"
      v-model="d_valor"
      v-on:change="dispararEvento">
    </b-form-input>
  </Contenedor>
</template>

<script>
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
export default {
  name: 'CampoHora',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>