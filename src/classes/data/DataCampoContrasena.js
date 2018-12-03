import DataCampo from '@/classes/data/DataCampo'

const DataCampoContrasena = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoContrasena.prototype = Object.create(DataCampo.prototype)
DataCampoContrasena.prototype.constructor = DataCampoContrasena

export default DataCampoContrasena
