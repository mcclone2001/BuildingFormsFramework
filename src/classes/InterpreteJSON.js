import MapeoTipoDeCampoAClaseDeDatos from '@/classes/catalogs/MapeoTipoDeCampoAClaseDeDatos'

export default class {
  CrearCampoDesdeJSON (jsonCampo) {
    // https://stackoverflow.com/questions/34655616/create-an-instance-of-a-class-in-es6-with-a-dynamic-name/34656123
    return new MapeoTipoDeCampoAClaseDeDatos[jsonCampo.tipo](jsonCampo)
  }

  CrearCamposDesdeJSON (jsonCampos) {
    var campos = []
    jsonCampos.forEach(function (jsonCampo) {
      campos.push(this.CrearCampoDesdeJSON(jsonCampo))
    }, this)
    return campos
  }

  ConstruirFormulario (definicionDeFormulario) {
    var formulario = {}
    formulario.etiqueta = definicionDeFormulario.etiqueta
    formulario.campos = this.CrearCamposDesdeJSON(definicionDeFormulario.campos)
    return formulario
  }

}
