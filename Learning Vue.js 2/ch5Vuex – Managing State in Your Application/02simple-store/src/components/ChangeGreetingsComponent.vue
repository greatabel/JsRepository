<template>
    <input :value="msg" @keyup="changeMessage($event.target.value)"
    @keyup.enter="incrementCounter">
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      msg: 'getMessage'
    }),
    methods:  mapActions(['changeMessage', 'incrementCounter'])
  }
</script>