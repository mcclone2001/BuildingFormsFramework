import Vue from 'vue'
import Router from 'vue-router'

import Form from '@/components/Form'
import WYSIWYG from '@/components/Editor'

import InterpreteJSON from '@/classes/InterpreteJSON'
import FormulariosDemo from '@/assets/FormulariosDemo'

Vue.use(Router)

var rutas = construirRutas(FormulariosDemo)
var interpreteJSON = new InterpreteJSON()

rutas.push({
  path: '/wysiwyg',
  name: 'Editor WYSIWYG',
  component: WYSIWYG
})

function construirRutas (definicionDeRutas) {
  var rutas = []
  definicionDeRutas.forEach(function (definicionDeFormulario) {
    this.rutas.push(this.construirRuta(definicionDeFormulario))
  }, { rutas, construirRuta })
  return rutas
}

function construirRuta (definicionDeFormulario) {
  var ruta = {}
  ruta.path = definicionDeFormulario.nombre
  ruta.name = definicionDeFormulario.titulo
  ruta.component = Form
  ruta.props = function (route) {
    return interpreteJSON.ConstruirFormulario(definicionDeFormulario)
  }
  return ruta
}

export default new Router({
  routes: rutas
})
