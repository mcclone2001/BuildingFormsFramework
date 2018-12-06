import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import InterpreteJSON from '@/classes/InterpreteJSON'
import FormulariosDemo from '@/assets/FormulariosDemo'

Vue.use(Router)

var rutas = construirRutas(FormulariosDemo)
var interpreteJSON = new InterpreteJSON()

function construirRutas (definicionDeRutas) {
  var rutas = []
  definicionDeRutas.forEach(function (definicionDeFormulario) {
    this.rutas.push(this.construirRuta(definicionDeFormulario))
  }, { rutas, construirRuta })
  return rutas
}

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

const construirFormulario = function (definicionDeFormulario) {
  var formulario = {}
  formulario.titulo = definicionDeFormulario.titulo
  formulario.campos = interpreteJSON.CrearCamposDesdeJSON(definicionDeFormulario.campos)
  return formulario
}

export default new Router({
  routes: rutas
})
