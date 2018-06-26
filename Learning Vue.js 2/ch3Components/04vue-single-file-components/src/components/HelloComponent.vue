<template lang="jade">
  h1 {{ msg }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello from Abel!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
