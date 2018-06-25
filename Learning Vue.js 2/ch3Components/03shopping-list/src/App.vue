<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">

    <add-item-component></add-item-component>
  </div>
</template>

<script>
import AddItemComponent from './components/AddItemComponent'

export default {
  // name: 'App',
  components: {
    AddItemComponent
  }
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
