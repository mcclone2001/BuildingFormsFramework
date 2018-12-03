import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'

export default [
  {
    titulo: 'Registrar Cliente',
    slug: '/',
    campos: [
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Nombre(s)',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Apellido Paterno',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Apellido Materno',
          evento: 'CambioApellidoMaterno',
          valor: ''
        }
      }
    ]
  },
  {
    titulo: 'Empleado',
    slug: '/empleado',
    campos: [
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Alfa',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Bravo',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Charlie',
          evento: 'CambioApellidoMaterno',
          valor: ''
        }
      }
    ]
  },
  {
    titulo: 'Usuario',
    slug: '/usuario',
    campos: [
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Delta',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Echo',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          etiqueta: 'Foxtrot',
          evento: 'CambioApellidoMaterno',
          valor: ''
        }
      }
    ]
  }
]
