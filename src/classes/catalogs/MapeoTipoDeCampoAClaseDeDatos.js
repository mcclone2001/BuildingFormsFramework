import * as DataClassesCollection from '@/classes/data/DataClassesCollection'
import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'

export default {
  [TipoDeCampo.ELEMENTO]: DataClassesCollection.DataElemento,
  [TipoDeCampo.CAMPO]: DataClassesCollection.DataCampo,
  [TipoDeCampo.CAMPO_TEXTO]: DataClassesCollection.DataCampoTexto,
  [TipoDeCampo.CAMPO_RANGO]: DataClassesCollection.DataCampoRango,
  [TipoDeCampo.CAMPO_CONTRASENA]: DataClassesCollection.DataCampoContrasena,
  [TipoDeCampo.CAMPO_CORREO]: DataClassesCollection.DataCampoCorreo,
  [TipoDeCampo.CAMPO_NUMERO]: DataClassesCollection.DataCampoNumero,
  [TipoDeCampo.CAMPO_URL]: DataClassesCollection.DataCampoURL,
  [TipoDeCampo.CAMPO_TELEFONO]: DataClassesCollection.DataCampoTelefono,
  [TipoDeCampo.CAMPO_FECHA]: DataClassesCollection.DataCampoFecha,
  [TipoDeCampo.CAMPO_HORA]: DataClassesCollection.DataCampoHora,
  [TipoDeCampo.CAMPO_COLOR]: DataClassesCollection.DataCampoColor,
  [TipoDeCampo.BOTON]: DataClassesCollection.DataBoton
}
