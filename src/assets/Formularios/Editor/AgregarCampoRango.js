import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'

export default {
  parametros: {
    etiqueta: 'Agregar Campo Rango',
    nombre: '',
    campos: [
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'nombre',
          etiqueta: 'Nombre',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'etiqueta',
          etiqueta: 'Etiqueta',
          evento: 'CambioEtiqueta',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'evento',
          etiqueta: 'Evento',
          evento: 'CambioEvento',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_NUMERO,
        parametros: {
          nombre: 'valor',
          etiqueta: 'Valor',
          evento: 'CambioValor',
          valor: ''
        }
      }
    ]
  }
}
