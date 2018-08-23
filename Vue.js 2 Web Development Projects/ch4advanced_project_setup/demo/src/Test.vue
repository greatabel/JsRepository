<template>
    <div>
        <p> {{ message }} </p>
        <input v-model="message" />
  <!--   </div>

    <div> -->
        <ul class="movies">
       <li v-for="movie of movies" class="movie">
         {{ movie.title }}
        </li> 
        </ul>
    </div>

</template>

<script>
export default {
     data () {
       return {
         message: 'hello world!',
         movies: [
           { title: 'Star Wars' },
           { title: 'Blade Runner' },
],
} },
} 
</script>

<style>
p {
    color: grey;
}
</style>