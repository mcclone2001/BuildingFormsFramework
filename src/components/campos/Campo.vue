<script>
  import Elemento from '@/components/campos/Elemento'
  export default {
    name: 'Campo',
    mixins: [Elemento],
    props: [
      'valor',
      'evento'
    ],
    data: function () {
      return {
        d_valor: this.valor,
        d_evento: this.evento
      }
    },
    methods: {
      dispararEvento: function (evento) {
        this.$emit('change', this.d_evento)
      }
    },
    watch: {
      valor (to, from) {
        this.d_valor = to
      },
      evento (to, from) {
        this.d_evento = to
      },
      d_valor (to, from) {
        this.$emit('input', to)
      }
    }
  }
</script>