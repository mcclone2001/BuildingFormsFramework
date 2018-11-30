<template>
  <div>
  <h1>{{ d_etiqueta }}</h1>
  <span>UUID: {{ d_UUID }}</span>
  </div>
</template>

<script>
export default{
  name: 'Elemento',
  props: [
    'etiqueta'
  ],
  data: function () {
    return {
      d_UUID: this.generarUUID(),
      d_etiqueta: this.etiqueta
    }
  },
  methods: {
    generarUUID: function () {
      //  https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      console.log('generando un uuid')
      var d = new Date().getTime()
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now() //  use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
    },

    codificarEntidadesHTML: function (cadena) {
      //  https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
      var encodedStr = cadena.replace(/[\u00A0-\u9999<>&]/gim, function (i) {
        return '&#' + i.charCodeAt(0) + ';'
      })
      return encodedStr
    }
  }
}
</script>