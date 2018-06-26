<template>
    <div>
  <h3>

    {{ isworking ? workingtitle: restingtitle }}
  </h3>

        <p>
 实验Math.pow(5, 3):&nbsp; {{ Math.pow(5, 3) }}
    </p>

    </div>
</template>

<style scoped>
</style>

<script>
export default {
    data () {
        return {
            workingtitle: 'Work!',
            restingtitle: 'Rest!'
        }
    },
    props: ['isworking']
}
</script>
