import DataCampo from '@/classes/data/DataCampo'

const DataCampoCorreo = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoCorreo.prototype = Object.create(DataCampo.prototype)
DataCampoCorreo.prototype.constructor = DataCampoCorreo

export default DataCampoCorreo
