<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>Toolbox</h2>
        <b-list-group v-for="campo in d_campos" :key="campo">
          <b-list-group-item>
            {{ campo }}
            { Preview }
            <b-button v-b-modal.modalAgregarCampo @click="definirTipoDeNuevoComponente(campo)">+</b-button>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <Form v-bind="d_objeto_formulario"></Form>
      </b-col>
      <b-col>Selection properties</b-col>
    </b-row>
    <b-modal id="modalAgregarCampo" title="Bootstrap-Vue" @ok="agregarCampo()">
      <Form v-bind="d_objeto_formulario_agregar_campo"></Form>
    </b-modal>
  </b-container>
</template>

<script>
  import TipoDeCampo from '@/classes/catalogs/TipoDeCampo'
  import DataForm from '@/classes/data/DataForm'
  import Form from '@/components/Form'
  import InterpreteJSON from '@/classes/InterpreteJSON'
  
  import DefinicionFormularioAgregarCampo from '@/assets/Formularios/Editor/AgregarCampo'
  import DefinicionFormularioVacio from '@/assets/Formularios/Editor/PreviewVacio'

  var interpreteJSON = new InterpreteJSON()

  export default {
    name: 'WYSIWYG',
    components: {
      Form
    },
    data: function () {
      var formularioVacio = new DataForm(DefinicionFormularioVacio)
      var formularioAgregarCampo = new DataForm(DefinicionFormularioAgregarCampo)
      return {
        d_campos: TipoDeCampo,
        d_formulario: formularioVacio,
        d_objeto_formulario: interpreteJSON.ConstruirFormulario(formularioVacio.parametros),
        d_objeto_formulario_agregar_campo: interpreteJSON.ConstruirFormulario(formularioAgregarCampo.parametros),
        d_tipo_de_nuevo_componente: ''
      }
    },
    methods: {
      agregarCampo: function () {
        var tipo = this.d_tipo_de_nuevo_componente
        var nombre = this.obtenerCampoDeNombre('nombre').obtenerValor()
        var etiqueta = this.obtenerCampoDeNombre('etiqueta').obtenerValor()
        var evento = this.obtenerCampoDeNombre('evento').obtenerValor()
        var valor = this.obtenerCampoDeNombre('valor').obtenerValor()
        this.d_formulario.parametros.campos.push({
          tipo,
          parametros: {
            nombre,
            etiqueta,
            evento,
            valor
          }
        })
        this.d_objeto_formulario = interpreteJSON.ConstruirFormulario(this.d_formulario.parametros)
      },
      obtenerCampoDeNombre: function (nombre) {
        return this.d_objeto_formulario_agregar_campo.campos.find(function (element) { return element.obtenerNombre() === nombre })
      },
      definirTipoDeNuevoComponente: function (tipo) {
        this.d_tipo_de_nuevo_componente = tipo
      }
    }
  }
</script>