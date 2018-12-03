import DataCampo from '@/classes/data/DataCampo'

const DataCampoURL = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoURL.prototype = Object.create(DataCampo.prototype)
DataCampoURL.prototype.constructor = DataCampoURL

export default DataCampoURL
