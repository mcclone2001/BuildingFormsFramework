import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoNumero = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_NUMERO
}
DataCampoNumero.prototype = Object.create(DataCampo.prototype)
DataCampoNumero.prototype.constructor = DataCampoNumero

export default DataCampoNumero
