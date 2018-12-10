import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoTelefono = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_TELEFONO
}
DataCampoTelefono.prototype = Object.create(DataCampo.prototype)
DataCampoTelefono.prototype.constructor = DataCampoTelefono

export default DataCampoTelefono
