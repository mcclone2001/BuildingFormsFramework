import DataCampo from '@/classes/data/DataCampo'

const DataCampoColor = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoColor.prototype = Object.create(DataCampo.prototype)
DataCampoColor.prototype.constructor = DataCampoColor

export default DataCampoColor
