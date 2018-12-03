import * as DataClassesCollection from '@/classes/data/DataClassesCollection'
import * as Components from '@/components/ComponentsCollection'

export default {
  // https://stackoverflow.com/questions/332422/get-the-name-of-an-objects-type
  // en el template usamos x.constructor.name porque estamos usando la instancia para detectar el nombre de la clase
  // aqui usamos x.PROTOTYPE.constructor.name porque estamos usando la clase para detectar su nombre
  [DataClassesCollection.DataElemento.prototype.constructor.name]: Components.Elemento.name,
  [DataClassesCollection.DataContenedor.prototype.constructor.name]: Components.Contenedor.name,
  [DataClassesCollection.DataCampo.prototype.constructor.name]: Components.Campo.name,
  [DataClassesCollection.DataCampoTexto.prototype.constructor.name]: Components.CampoTexto.name,
  [DataClassesCollection.DataCampoRango.prototype.constructor.name]: Components.CampoRango.name,
  [DataClassesCollection.DataCampoContrasena.prototype.constructor.name]: Components.CampoContrasena.name,
  [DataClassesCollection.DataCampoCorreo.prototype.constructor.name]: Components.CampoCorreo.name,
  [DataClassesCollection.DataCampoNumero.prototype.constructor.name]: Components.CampoNumero.name,
  [DataClassesCollection.DataCampoURL.prototype.constructor.name]: Components.CampoURL.name,
  [DataClassesCollection.DataCampoTelefono.prototype.constructor.name]: Components.CampoTelefono.name,
  [DataClassesCollection.DataCampoFecha.prototype.constructor.name]: Components.CampoFecha.name,
  [DataClassesCollection.DataCampoHora.prototype.constructor.name]: Components.CampoHora.name,
  [DataClassesCollection.DataCampoColor.prototype.constructor.name]: Components.CampoColor.name,
  [DataClassesCollection.DataBoton.prototype.constructor.name]: Components.Boton.name
}
