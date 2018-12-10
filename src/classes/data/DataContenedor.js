import DataElemento from '@/classes/data/DataElemento'

const DataContenedor = function (definicion) {
  DataElemento.call(this, definicion)
}
DataContenedor.prototype = Object.create(DataElemento.prototype)
DataContenedor.prototype.constructor = DataContenedor

export default DataContenedor
