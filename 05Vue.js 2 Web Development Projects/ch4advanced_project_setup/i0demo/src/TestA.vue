<script>
   export default {
     data () {
       return {
         movies: [
           { title: 'Star Wars A' },
           { title: 'Matrix A' },
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

<style scoped> 
.movies {
     list-style: none;
     padding: 2px;
     background: rgba(0, 0, 0, .1);
     border-radius: 3px;
}

.movie:not(:last-child) {
     padding-bottom: 6px;
     margin-bottom: 6px;
     border-bottom: solid 1px rgba(0, 0, 0, .1);
}
</style>