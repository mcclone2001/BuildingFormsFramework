import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataCampoContrasena = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.CAMPO_CONTRASENA
}
DataCampoContrasena.prototype = Object.create(DataCampo.prototype)
DataCampoContrasena.prototype.constructor = DataCampoContrasena

export default DataCampoContrasena
