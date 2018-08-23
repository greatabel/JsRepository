<script>
   export default {
     data () {
       return {
         movies: [
           { title: 'Star Wars A' },
           { title: 'Blade Runner A' },
                 ], }
},

render (h) {
    const itemClass = 'movie' 
    return <ul class='movies'>
        {this.movies.map(movie =>
            <li class={ itemClass }>{ movie.title }</li>
            )}
          </ul>
    }, 
}
</script>