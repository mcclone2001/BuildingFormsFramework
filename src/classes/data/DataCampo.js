import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataElemento from '@/classes/data/DataElemento'

const DataCampo = function (definicion) {
  DataElemento.call(this, definicion)
  this.parametros.valor = definicion ? definicion.parametros.valor : undefined
  this.parametros.evento = definicion ? definicion.parametros.evento : undefined
  this.parametros.nombre = definicion ? definicion.parametros.nombre : undefined
  this.tipo = TipoDeCampo.CAMPO
}
DataCampo.prototype = Object.create(DataElemento.prototype)
DataCampo.prototype.constructor = DataCampo

export default DataCampo
