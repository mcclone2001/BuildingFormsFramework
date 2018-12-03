import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'

export const CamposDemo = [
  {
    tipo: TipoDeCampo.ELEMENTO,
    parametros: {
      etiqueta: 'Un Elemento'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO,
    parametros: {
      etiqueta: 'Un Campo',
      valor: 123,
      evento: 'Evento de un Campo'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_TEXTO,
    parametros: {
      etiqueta: 'Un Campo de Texto',
      valor: '456',
      evento: 'Evento de un campo de texto'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_RANGO,
    parametros: {
      etiqueta: 'Un campo rango',
      valor: 5,
      valorMinimo: 0,
      valorMaximo: 10,
      incremento: 0.5,
      evento: 'Evento de un campo rango'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_CONTRASENA,
    parametros: {
      etiqueta: 'Un campo contraseña',
      valor: 'contraseña secreta',
      evento: 'Evento de un campo contraseña'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_CORREO,
    parametros: {
      etiqueta: 'Un campo de correo',
      valor: 'mcclone2001@gmail.com',
      evento: 'Evento de un campo correo'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_NUMERO,
    parametros: {
      etiqueta: 'Un campo de numero',
      valor: 125,
      evento: 'Evento de un campo numero'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_URL,
    parametros: {
      etiqueta: 'Un campo de URL',
      valor: 125,
      evento: 'Evento de un campo URL'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_TELEFONO,
    parametros: {
      etiqueta: 'Un campo de telefono',
      valor: 125,
      evento: 'Evento de un campo telefono'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_FECHA,
    parametros: {
      etiqueta: 'Un campo de fecha',
      valor: '2018-09-25',
      evento: 'Evento de un campo fecha'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_HORA,
    parametros: {
      etiqueta: 'Un campo de hora',
      valor: '15:20:19',
      evento: 'Evento de un campo hora'
    }
  },

  {
    tipo: TipoDeCampo.CAMPO_COLOR,
    parametros: {
      etiqueta: 'Un campo de color',
      valor: '#ffffff',
      evento: 'Evento de un campo color'
    }
  },

  {
    tipo: TipoDeCampo.BOTON,
    parametros: {
      etiqueta: 'Un boton',
      valor: 'BoToN',
      evento: 'Evento de un boton'
    }
  }
]
