<script>
  import Elemento from '@/components/Elemento'
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
    }
  }
</script>