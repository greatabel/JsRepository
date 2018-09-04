<template>
    <div class="blog-map">
    <googlemaps-map 
    :center="center" 
    :zoom="zoom" 
    :options="mapOptions" 
    @update:center="setCenter" 
    @update:zoom="setZoom"/> </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { 
    mapGetters, 
    mapActions,
} = createNamespacedHelpers('maps')

export default {

data () {
 return {
    // center: 
    // {
    // lat: 48.8538302, lng: 2.2982161,
    // },
    // zoom: 15, 
    }
 },
 computed: {
    ...mapGetters([
        'center',
        'zoom',
    ]),
    mapOptions () {
        return {
            fullscreenControl: false,
        }
    },
 },
 methods: mapActions([
    'setCenter',
    'setZoom',])

}

</script>