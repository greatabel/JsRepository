<template>
  <div>
    <button title="start">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button title="pause">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button title="stop">
      <i class="glyphicon glyphicon-stop"></i>
    </button>

    <h3 v-if="!isadmin">Beer Time!</h3>
    <h3 v-show="!isadmin">Beer Time!</h3>
  </div>

</template>

<style scoped>
</style>

<script>

export default { 
    data () { 
      return { 
        isadmin: false 
      } 
    } 
  }
</script>