<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
    // props: ['msg']
    computed: {
        msg () {
            return this.$store.state.msg
        }
    }
}
</script>