import DataElemento from '@/classes/data/DataElemento'

const DataContenedor = function (parametros) {
  DataElemento.call(this, parametros)
}
DataContenedor.prototype = Object.create(DataElemento.prototype)
DataContenedor.prototype.constructor = DataContenedor

export default DataContenedor
