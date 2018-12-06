import * as DataClassesCollection from '@/classes/data/DataClassesCollection'
import * as Campos from '@/components/CamposCollection'

export default {
  // https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
  // en el template usamos x.constructor.name porque estamos usando la instancia para detectar el nombre de la clase
  // aqui usamos x.PROTOTYPE.constructor.name porque estamos usando la clase para detectar su nombre
  [DataClassesCollection.DataElemento.prototype.constructor.name]: Campos.Elemento.name,
  [DataClassesCollection.DataContenedor.prototype.constructor.name]: Campos.Contenedor.name,
  [DataClassesCollection.DataCampo.prototype.constructor.name]: Campos.Campo.name,
  [DataClassesCollection.DataCampoTexto.prototype.constructor.name]: Campos.CampoTexto.name,
  [DataClassesCollection.DataCampoRango.prototype.constructor.name]: Campos.CampoRango.name,
  [DataClassesCollection.DataCampoContrasena.prototype.constructor.name]: Campos.CampoContrasena.name,
  [DataClassesCollection.DataCampoCorreo.prototype.constructor.name]: Campos.CampoCorreo.name,
  [DataClassesCollection.DataCampoNumero.prototype.constructor.name]: Campos.CampoNumero.name,
  [DataClassesCollection.DataCampoURL.prototype.constructor.name]: Campos.CampoURL.name,
  [DataClassesCollection.DataCampoTelefono.prototype.constructor.name]: Campos.CampoTelefono.name,
  [DataClassesCollection.DataCampoFecha.prototype.constructor.name]: Campos.CampoFecha.name,
  [DataClassesCollection.DataCampoHora.prototype.constructor.name]: Campos.CampoHora.name,
  [DataClassesCollection.DataCampoColor.prototype.constructor.name]: Campos.CampoColor.name,
  [DataClassesCollection.DataBoton.prototype.constructor.name]: Campos.Boton.name
}
