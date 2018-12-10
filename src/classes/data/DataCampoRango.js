import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoRango = function (definicion) {
  DataCampo.call(this, definicion)
  this.parametros.valorMinimo = definicion ? definicion.parametros.valorMinimo : undefined
  this.parametros.valorMaximo = definicion ? definicion.parametros.valorMaximo : undefined
  this.parametros.incremento = definicion ? definicion.parametros.incremento : 1
  this.tipo = TipoDeCampo.CAMPO_RANGO
}
DataCampoRango.prototype = Object.create(DataCampo.prototype)
DataCampoRango.prototype.constructor = DataCampoRango
DataCampoRango.prototype.asignaValorMinimo = function (nuevoValorMinimo) {
  this.parametros.valorMinimo = nuevoValorMinimo
}
DataCampoRango.prototype.asignaValorMaximo = function (nuevoValorMaximo) {
  this.parametros.valorMaximo = nuevoValorMaximo
}
DataCampoRango.prototype.asignaIncremento = function (nuevoIncremento) {
  this.parametros.incremento = nuevoIncremento
}

export default DataCampoRango
