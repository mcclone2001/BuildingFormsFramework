<template>
  <Contenedor etiqueta="Contenedor">
    <template v-for="campo in d_campos">
          <component 
            :is="decodificarNombreDeComponente(campo)" 
            :key="campo.UUID" 
            :parametros="campo" 
            v-bind="campo"
            v-on:change="dispararEvento(campo,$event)"></component>
    </template>
  </Contenedor>
</template>

<script>
import Elemento from '@/components/Elemento'
import Contenedor from '@/components/Contenedor'
import Campo from '@/components/Campo'
import CampoTexto from '@/components/CampoTexto'
import CampoRango from '@/components/CampoRango'
import CampoContrasena from '@/components/CampoContrasena'
import CampoCorreo from '@/components/CampoCorreo'
import CampoNumero from '@/components/CampoNumero'
import CampoURL from '@/components/CampoURL'
import CampoTelefono from '@/components/CampoTelefono'
import CampoFecha from '@/components/CampoFecha'
import CampoHora from '@/components/CampoHora'
import CampoColor from '@/components/CampoColor'
import Boton from '@/components/Boton'

let data = function () {
  return {
    d_campos: this.campos
  }
}

export default {
  name: 'Form',
  components: {
    Elemento,
    Contenedor,
    Campo,
    CampoTexto,
    CampoRango,
    CampoContrasena,
    CampoCorreo,
    CampoNumero,
    CampoURL,
    CampoTelefono,
    CampoFecha,
    CampoHora,
    CampoColor,
    Boton
  },
  props: [
    'titulo',
    'campos'
  ],
  data: data,
  methods: {
    decodificarNombreDeComponente: function (elemento) {
      switch (elemento.constructor.name) {
        case 'DataElemento':
          return 'Elemento'

        case 'DataContenedor':
          return 'Contenedor'

        case 'DataCampo':
          return 'Campo'

        case 'DataCampoTexto':
          return 'CampoTexto'

        case 'DataCampoRango':
          return 'CampoRango'

        case 'DataCampoContrasena':
          return 'CampoContrasena'

        case 'DataCampoCorreo':
          return 'CampoCorreo'

        case 'DataCampoNumero':
          return 'CampoNumero'

        case 'DataCampoURL':
          return 'CampoURL'

        case 'DataCampoTelefono':
          return 'CampoTelefono'

        case 'DataCampoFecha':
          return 'CampoFecha'

        case 'DataCampoHora':
          return 'CampoHora'

        case 'DataCampoColor':
          return 'CampoColor'

        case 'DataBoton':
          return 'Boton'
      }
    }
  }
}
</script>