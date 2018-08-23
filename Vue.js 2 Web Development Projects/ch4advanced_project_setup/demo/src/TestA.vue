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

<style> 
.movies {
     list-style: none;
     padding: 12px;
     background: rgba(0, 0, 0, .1);
     border-radius: 3px;
} 
</style>