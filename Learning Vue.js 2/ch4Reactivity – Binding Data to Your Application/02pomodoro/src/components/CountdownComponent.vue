<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{ min }}</span>:<span>{{ sec }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>


<script>
  export default {
    data () {
      return {
        min: 1,
        sec: 5
      }
    }
  }
</script>
