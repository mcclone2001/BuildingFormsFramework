import DataCampo from '@/classes/data/DataCampo'

const DataCampoFecha = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoFecha.prototype = Object.create(DataCampo.prototype)
DataCampoFecha.prototype.constructor = DataCampoFecha

export default DataCampoFecha
