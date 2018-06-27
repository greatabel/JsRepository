<template>
  <div class="well">
    <img v-bind:src="catImgSrc" />
  </div>
</template>

<style scoped>
</style>

<script>
export default {
 data () {
    return {
        catImgSrc: "http://thecatapi.com/api/images/get?size=med"
    }
 }
}
</script>
