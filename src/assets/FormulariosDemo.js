import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'

export default [
  {
    titulo: 'Registrar Cliente',
    slug: '/',
    campos: [
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'Nombre',
          etiqueta: 'Nombre(s)',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'ApellidoPaterno',
          etiqueta: 'Apellido Paterno',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'ApellidoMaterno',
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
          nombre: 'alfa',
          etiqueta: 'Alfa',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'bravo',
          etiqueta: 'Bravo',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'charlie',
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
          nombre: 'delta',
          etiqueta: 'Delta',
          evento: 'CambioNombre',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'echo',
          etiqueta: 'Echo',
          evento: 'CambioApellidoPaterno',
          valor: ''
        }
      },
      {
        tipo: TipoDeCampo.CAMPO_TEXTO,
        parametros: {
          nombre: 'foxtrot',
          etiqueta: 'Foxtrot',
          evento: 'CambioApellidoMaterno',
          valor: ''
        }
      }
    ]
  }
]
