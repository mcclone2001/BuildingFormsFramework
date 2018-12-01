<template>
  <Contenedor etiqueta="Contenedor">
    <template v-for="campo in d_campos">
          <component 
            :is="MapeoClaseAComponente[campo.constructor.name]" 
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
import * as Props from '@/classes/Props'

let data = function () {
  return {
    d_campos: this.campos,
    MapeoClaseAComponente: {
      // TO DO: extraer a otro archivo MapeoNombreClaseDeDatosAComponente
      // https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
      // en el template usamos x.constructor.name porque estamos usando la instancia para detectar el nombre de la clase
      // aqui usamos x.PROTOTYPE.constructor.name porque estamos usando la clase para detectar su nombre
      [Props.DataElemento.prototype.constructor.name]: Elemento.name,
      [Props.DataContenedor.prototype.constructor.name]: Contenedor.name,
      [Props.DataCampo.prototype.constructor.name]: Campo.name,
      [Props.DataCampoTexto.prototype.constructor.name]: CampoTexto.name,
      [Props.DataCampoRango.prototype.constructor.name]: CampoRango.name,
      [Props.DataCampoContrasena.prototype.constructor.name]: CampoContrasena.name,
      [Props.DataCampoCorreo.prototype.constructor.name]: CampoCorreo.name,
      [Props.DataCampoNumero.prototype.constructor.name]: CampoNumero.name,
      [Props.DataCampoURL.prototype.constructor.name]: CampoURL.name,
      [Props.DataCampoTelefono.prototype.constructor.name]: CampoTelefono.name,
      [Props.DataCampoFecha.prototype.constructor.name]: CampoFecha.name,
      [Props.DataCampoHora.prototype.constructor.name]: CampoHora.name,
      [Props.DataCampoColor.prototype.constructor.name]: CampoColor.name,
      [Props.DataBoton.prototype.constructor.name]: Boton.name
    }
  }
}

export default {
  name: 'Form',
  components: {
    // TO DO importar todos los componentes en una coleccion y llenar este objeto (componentes) con un foreach que recorra los elementos de la coleccion y los agregue como propiedades
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
  data: data
}
</script>