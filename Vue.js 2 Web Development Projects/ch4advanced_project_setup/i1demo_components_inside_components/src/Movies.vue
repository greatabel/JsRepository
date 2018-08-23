<template>
<ul class="movies">
    <Movie v-for="movie of movies" 
    :key="movie.id"
    :movie="movie"/>
      
</ul>
</template>

<script>
import Movie from './Movie.vue'

export default {
    components: {
        Movie,
    },
    data () {
         return {
           movies: [
             { id: 0, title: 'Star Wars II' },
             { id: 1, title: 'Blade Runner II' },
            ],  }
    }, 
}
</script>