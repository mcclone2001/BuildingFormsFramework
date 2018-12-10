import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataBoton = function (definicion) {
  DataCampo.call(this, definicion)
  this.tipo = TipoDeCampo.BOTON
}
DataBoton.prototype = Object.create(DataCampo.prototype)
DataBoton.prototype.constructor = DataBoton

export default DataBoton
