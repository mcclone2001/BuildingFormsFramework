import MapeoTipoDeCampoAClaseDeDatos from '@/classes/catalogs/MapeoTipoDeCampoAClaseDeDatos'

import DataElemento from '@/classes/data/DataElemento'
import DataContenedor from '@/classes/data/DataContenedor'
import DataCampo from '@/classes/data/DataCampo'
import DataCampoTexto from '@/classes/data/DataCampoTexto'
import DataCampoRango from '@/classes/data/DataCampoRango'
import DataCampoContrasena from '@/classes/data/DataCampoContrasena'
import DataCampoCorreo from '@/classes/data/DataCampoCorreo'
import DataCampoNumero from '@/classes/data/DataCampoNumero'
import DataCampoURL from '@/classes/data/DataCampoURL'
import DataCampoTelefono from '@/classes/data/DataCampoTelefono'
import DataCampoFecha from '@/classes/data/DataCampoFecha'
import DataCampoHora from '@/classes/data/DataCampoHora'
import DataCampoColor from '@/classes/data/DataCampoColor'
import DataBoton from '@/classes/data/DataBoton'

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
  CrearCamposDesdeJSON,

  DataElemento,
  DataContenedor,
  DataCampo,
  DataCampoTexto,
  DataCampoRango,
  DataCampoContrasena,
  DataCampoCorreo,
  DataCampoNumero,
  DataCampoURL,
  DataCampoTelefono,
  DataCampoFecha,
  DataCampoHora,
  DataCampoColor,
  DataBoton
}
