import DataCampo from '@/classes/data/DataCampo'

const DataCampoTelefono = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoTelefono.prototype = Object.create(DataCampo.prototype)
DataCampoTelefono.prototype.constructor = DataCampoTelefono

export default DataCampoTelefono
