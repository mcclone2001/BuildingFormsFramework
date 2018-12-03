import DataCampo from '@/classes/data/DataCampo'

const DataCampoHora = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoHora.prototype = Object.create(DataCampo.prototype)
DataCampoHora.prototype.constructor = DataCampoHora

export default DataCampoHora
