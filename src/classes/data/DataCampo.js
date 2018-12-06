import DataElemento from '@/classes/data/DataElemento'

const DataCampo = function (parametros) {
  DataElemento.call(this, parametros)
  this.valor = parametros ? parametros.valor : undefined
  this.evento = parametros ? parametros.evento : undefined
  this.nombre = parametros ? parametros.nombre : undefined
}
DataCampo.prototype = Object.create(DataElemento.prototype)
DataCampo.prototype.constructor = DataCampo

export default DataCampo
