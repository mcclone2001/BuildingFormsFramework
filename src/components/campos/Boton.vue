<template>
  <Contenedor>
    <b-button type="button" variant="primary">{{etiqueta}}</b-button>
  </Contenedor>
</template>

<script>
import Campo from '@/components/campos/Campo'
import Contenedor from '@/components/campos/Contenedor'
export default {
  name: 'Boton',
  mixins: [ Campo ],
  components: { Contenedor }
}
</script>