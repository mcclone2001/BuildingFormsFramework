import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoCorreo = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_CORREO
}
DataCampoCorreo.prototype = Object.create(DataCampo.prototype)
DataCampoCorreo.prototype.constructor = DataCampoCorreo

export default DataCampoCorreo
