<template>
  <b-container class="bv-example-row">
      <b-row>
          <b-col>
            <h2>Toolbox</h2>
            <b-list-group v-for="campo in d_campos" :key="campo">
              <b-list-group-item>
                {{ campo }}
                { Preview }
                <b-button>+</b-button>
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col>Preview</b-col>
          <b-col>Selection properties</b-col>
      </b-row>
  </b-container>
</template>

<script>
  import MapeoNombreClaseDeDatosANombreComponente from '@/classes/catalogs/MapeoNombreClaseDeDatosANombreComponente'

  export default {
    name: 'WYSIWYG',
    data: function () {
      return {
        d_campos: MapeoNombreClaseDeDatosANombreComponente
      }
    }
  }
</script>