<template>
    <h1>{{ getMessage }}</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['getMessage'])
}
</script>