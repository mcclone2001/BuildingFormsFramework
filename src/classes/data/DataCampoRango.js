import DataCampo from '@/classes/data/DataCampo'

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

export default DataCampoRango
