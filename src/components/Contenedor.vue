<template>
  <b-form-group horizontal label-cols="2" id="fieldset1" :label="d_etiqueta">
    <slot></slot>
  </b-form-group>
</template>

<script>
import Elemento from '@/components/Elemento'
export default{
  name: 'Contenedor',
  mixins: [Elemento]
}
</script>