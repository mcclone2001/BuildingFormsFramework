<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/wysiwyg">WYSIWYG</router-link>
    <router-link to="/">Cliente</router-link>
    <router-link to="/empleado">Empleado</router-link>
    <router-link to="/usuario">Usuario</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
