import DataCampo from '@/classes/data/DataCampo'

const DataCampoNumero = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoNumero.prototype = Object.create(DataCampo.prototype)
DataCampoNumero.prototype.constructor = DataCampoNumero

export default DataCampoNumero
