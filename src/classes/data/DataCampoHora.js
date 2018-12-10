import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoHora = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_HORA
}
DataCampoHora.prototype = Object.create(DataCampo.prototype)
DataCampoHora.prototype.constructor = DataCampoHora

export default DataCampoHora
