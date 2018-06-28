<template>
    <input :value='getMessage' @keyup='changeMsg'>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    computed: mapGetters(['getMessage']),
    methods: {
        changeMsg(ev) {
            this.$store.commit('changeMessage', ev.target.value);
            this.$store.commit('incrementCounter')
        }
    }
}
</script>