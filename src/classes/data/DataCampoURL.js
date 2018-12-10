import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoURL = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_URL
}
DataCampoURL.prototype = Object.create(DataCampo.prototype)
DataCampoURL.prototype.constructor = DataCampoURL

export default DataCampoURL
