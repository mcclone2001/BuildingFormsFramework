import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Form from '@/components/Form'
import * as Props from '@/classes/Props'
// import { CamposDemo } from '@/assets/CamposDemo'
import FormulariosDemo from '@/assets/FormulariosDemo'

Vue.use(Router)

/*
var campos = Props.CrearCamposDesdeJSON(CamposDemo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form,
      props: function (route) {
        return {
          titulo: 'El Titulo',
          campos
        }
      }
    }
  ]
})
*/

var rutas = construirRutas(FormulariosDemo)

function construirRuta (definicionDeFormulario) {
  var ruta = {}
  ruta.path = definicionDeFormulario.slug
  ruta.name = definicionDeFormulario.titulo
  ruta.component = Form
  ruta.props = function (route) {
    return construirFormulario(definicionDeFormulario)
  }
  return ruta
}

function construirRutas (definicionDeRutas) {
  var rutas = []
  definicionDeRutas.forEach(function (definicionDeFormulario) {
    this.rutas.push(this.construirRuta(definicionDeFormulario))
  }, { rutas, construirRuta })
  return rutas
}

const construirFormulario = function (definicionDeFormulario) {
  var formulario = {}
  formulario.titulo = definicionDeFormulario.titulo
  formulario.campos = Props.CrearCamposDesdeJSON(definicionDeFormulario.campos)
  return formulario
}

export default new Router({
  routes: rutas
})
