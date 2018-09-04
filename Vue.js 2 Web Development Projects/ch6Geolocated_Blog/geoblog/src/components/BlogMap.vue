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
export default {
data () {
 return {
    center: 
    {
    lat: 48.8538302, lng: 2.2982161,
    },
    zoom: 15, 
    }
 },
 computed: {
    mapOptions () {
        return {
            fullscreenControl: false,
        }
    },
 },
 methods: {
    setCenter(value) {
        this.center = value
    },
    setZoom (value){
        this.zoom = value
    },
 } 

}

</script>