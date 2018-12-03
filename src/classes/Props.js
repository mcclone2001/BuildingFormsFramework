import MapeoTipoDeCampoAClaseDeDatos from '@/classes/catalogs/MapeoTipoDeCampoAClaseDeDatos'

const CrearCampoDesdeJSON = function (jsonCampo) {
  // https://stackoverflow.com/questions/34655616/create-an-instance-of-a-class-in-es6-with-a-dynamic-name/34656123
  return new MapeoTipoDeCampoAClaseDeDatos[jsonCampo.tipo](jsonCampo.parametros)
}

const CrearCamposDesdeJSON = function (jsonCampos) {
  var campos = []
  jsonCampos.forEach(function (jsonCampo) {
    campos.push(CrearCampoDesdeJSON(jsonCampo))
  }, this)
  return campos
}

export {
  CrearCampoDesdeJSON,
  CrearCamposDesdeJSON
}
