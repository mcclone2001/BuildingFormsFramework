const DataElemento = function (parametros) {
  this.etiqueta = parametros ? this.codificarEntidadesHTML(parametros.etiqueta) : undefined
}
DataElemento.prototype.codificarEntidadesHTML = function (cadena) {
  // https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
  var encodedStr = cadena.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';'
  })
  return encodedStr
}

export default DataElemento
