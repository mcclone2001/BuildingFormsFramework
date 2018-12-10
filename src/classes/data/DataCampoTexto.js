import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoTexto = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_TEXTO
}
DataCampoTexto.prototype = Object.create(DataCampo.prototype)
DataCampoTexto.prototype.constructor = DataCampoTexto

export default DataCampoTexto
