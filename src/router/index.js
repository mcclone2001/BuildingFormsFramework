import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Form from '@/components/Form'
import * as Props from '@/classes/Props'
import { CamposDemo } from '@/assets/CamposDemo'

Vue.use(Router)

var campos = Props.CrearCamposDesdeJSON(CamposDemo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form,
      props: function (route) {
        return {
          titulo: 'El Titulo',
          campos
        }
      }
    }
  ]
})
