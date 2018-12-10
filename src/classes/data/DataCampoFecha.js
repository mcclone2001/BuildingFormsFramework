import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoFecha = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_FECHA
}
DataCampoFecha.prototype = Object.create(DataCampo.prototype)
DataCampoFecha.prototype.constructor = DataCampoFecha

export default DataCampoFecha
