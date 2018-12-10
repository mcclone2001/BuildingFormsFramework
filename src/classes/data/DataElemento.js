import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
const DataElemento = function (definicion) {
  this.parametros = {}
  this.parametros.etiqueta = definicion ? this.codificarEntidadesHTML(definicion.parametros.etiqueta) : undefined
  this.tipo = TipoDeCampo.ELEMENTO
}
DataElemento.prototype.codificarEntidadesHTML = function (cadena) {
  // https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
  var encodedStr = cadena.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';'
  })
  return encodedStr
}

export default DataElemento
