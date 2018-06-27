<template>
    <input :value='msg' @keyup='changeMsg'>
</template>

<script>
export default {

    computed: {
        msg () {
            return this.$store.getters.getMessage
        }
    },
    methods: {
        changeMsg(ev) {
            this.$store.commit('changeMessage', ev.target.value)
        }
    }
}
</script>