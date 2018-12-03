import DataCampo from '@/classes/data/DataCampo'

const DataCampoTexto = function (parametros) {
  DataCampo.call(this, parametros)
}
DataCampoTexto.prototype = Object.create(DataCampo.prototype)
DataCampoTexto.prototype.constructor = DataCampoTexto

export default DataCampoTexto
