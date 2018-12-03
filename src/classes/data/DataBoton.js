import DataCampo from '@/classes/data/DataCampo'

const DataBoton = function (parametros) {
  DataCampo.call(this, parametros)
}
DataBoton.prototype = Object.create(DataCampo.prototype)
DataBoton.prototype.constructor = DataBoton

export default DataBoton
