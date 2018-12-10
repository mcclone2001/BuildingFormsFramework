import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoColor = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_COLOR
}
DataCampoColor.prototype = Object.create(DataCampo.prototype)
DataCampoColor.prototype.constructor = DataCampoColor

export default DataCampoColor
