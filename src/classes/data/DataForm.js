import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
import DataCampo from '@/classes/data/DataCampo'

const DataForm = function (definicion) {
  DataCampo.call(this, definicion)
  this.parametros.campos = definicion ? definicion.parametros.campos : undefined
  this.tipo = TipoDeCampo.FORMULARIO
}
DataForm.prototype = Object.create(DataCampo.prototype)
DataForm.prototype.constructor = DataForm
DataForm.prototype.asignarCampos = function (nuevosCampos) {
  this.parametros.campos = nuevosCampos
}

export default DataForm
