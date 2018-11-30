import Elemento from '@/components/Elemento'
import TipoDeCampo from '@/classes/TipoDeCampo'

const CrearCampoDesdeJSON = function (jsonCampo) {
  // https://stackoverflow.com/questions/34655616/create-an-instance-of-a-class-in-es6-with-a-dynamic-name/34656123
  return new MapeoNombreAClase[jsonCampo.tipo](jsonCampo.parametros)
}

const CrearCamposDesdeJSON = function (jsonCampos) {
  var campos = []
  jsonCampos.forEach(function (jsonCampo) {
    campos.push(CrearCampoDesdeJSON(jsonCampo))
  }, this)
  return campos
}

const DataElemento = function (parametros) {
  this.etiqueta = parametros ? this.codificarEntidadesHTML(parametros.etiqueta) : undefined
}
DataElemento.prototype.obtenerComponente = function () {
  return new Elemento()
}
DataElemento.prototype.codificarEntidadesHTML = function (cadena) {
  // https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
  var encodedStr = cadena.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';'
  })
  return encodedStr
}

const DataContenedor = function (parametros) {
  DataElemento.call(this, parametros)
}
DataContenedor.prototype = Object.create(DataElemento.prototype)
DataContenedor.prototype.constructor = DataContenedor

const DataCampo = function (parametros) {
  DataElemento.call(this, parametros)
  this.valor = parametros ? parametros.valor : undefined
  this.evento = parametros ? parametros.evento : undefined
}
DataCampo.prototype = Object.create(DataElemento.prototype)
DataCampo.prototype.constructor = DataCampo

const DataCampoTexto = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoTexto.prototype = Object.create(DataCampo.prototype)
DataCampoTexto.prototype.constructor = DataCampoTexto

const DataCampoRango = function (parametros) {
  DataCampo.call(this, parametros)
  this.valorMinimo = parametros ? parametros.valorMinimo : undefined
  this.valorMaximo = parametros ? parametros.valorMaximo : undefined
  this.incremento = parametros ? parametros.incremento : 1
}
DataCampoRango.prototype = Object.create(DataCampo.prototype)
DataCampoRango.prototype.constructor = DataCampoRango
DataCampoRango.prototype.asignaValorMinimo = function (nuevoValorMinimo) {
  this.valorMinimo = nuevoValorMinimo
}
DataCampoRango.prototype.asignaValorMaximo = function (nuevoValorMaximo) {
  this.valorMaximo = nuevoValorMaximo
}
DataCampoRango.prototype.asignaIncremento = function (nuevoIncremento) {
  this.incremento = nuevoIncremento
}

const DataCampoContrasena = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoContrasena.prototype = Object.create(DataCampo.prototype)
DataCampoContrasena.prototype.constructor = DataCampoContrasena

const DataCampoCorreo = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoCorreo.prototype = Object.create(DataCampo.prototype)
DataCampoCorreo.prototype.constructor = DataCampoCorreo

const DataCampoNumero = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoNumero.prototype = Object.create(DataCampo.prototype)
DataCampoNumero.prototype.constructor = DataCampoNumero

const DataCampoURL = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoURL.prototype = Object.create(DataCampo.prototype)
DataCampoURL.prototype.constructor = DataCampoURL

const DataCampoTelefono = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoTelefono.prototype = Object.create(DataCampo.prototype)
DataCampoTelefono.prototype.constructor = DataCampoTelefono

const DataCampoFecha = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoFecha.prototype = Object.create(DataCampo.prototype)
DataCampoFecha.prototype.constructor = DataCampoFecha

const DataCampoHora = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoHora.prototype = Object.create(DataCampo.prototype)
DataCampoHora.prototype.constructor = DataCampoHora

const DataCampoColor = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoColor.prototype = Object.create(DataCampo.prototype)
DataCampoColor.prototype.constructor = DataCampoColor

const DataBoton = function (parametros) {
  DataCampo.call(this, parametros)
}
DataBoton.prototype = Object.create(DataCampo.prototype)
DataBoton.prototype.constructor = DataBoton

const DataFormulario = function (parametros) {
  this.campos = parametros.campos
}

const MapeoNombreAClase = {
  [TipoDeCampo.ELEMENTO]: DataElemento,
  [TipoDeCampo.CAMPO]: DataCampo,
  [TipoDeCampo.CAMPO_TEXTO]: DataCampoTexto,
  [TipoDeCampo.CAMPO_RANGO]: DataCampoRango,
  [TipoDeCampo.CAMPO_CONTRASENA]: DataCampoContrasena,
  [TipoDeCampo.CAMPO_CORREO]: DataCampoCorreo,
  [TipoDeCampo.CAMPO_NUMERO]: DataCampoNumero,
  [TipoDeCampo.CAMPO_URL]: DataCampoURL,
  [TipoDeCampo.CAMPO_TELEFONO]: DataCampoTelefono,
  [TipoDeCampo.CAMPO_FECHA]: DataCampoFecha,
  [TipoDeCampo.CAMPO_HORA]: DataCampoHora,
  [TipoDeCampo.CAMPO_COLOR]: DataCampoColor,
  [TipoDeCampo.BOTON]: DataBoton
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
  DataBoton,
  DataFormulario
}
