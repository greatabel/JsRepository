<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloComponent/>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent'

export default {
  name: 'App',
  components: {
    HelloComponent
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
