Vue.component('story', {
    template: "#template-story-raw",
    props: ['story'],
    methods: {
      upvoteStory: function(story){
        story.upvotes++;
        this.$http.patch('http://localhost:3000/stories/' + story.id,
          story);
        // $.ajax({
        //   url: 'http://localhost:3000/stories/' + story.id,
        //   type: 'PATCH',
        //   data: story,
        // });
      },
      deleteStory: function(story){
        Vue.delete(vm.stories, vm.stories.indexOf(story));
        this.$http.delete('http://localhost:3000/stories/' + story.id)
        
        // Vue.delete(vm.stories, key);
        // $.ajax({
        //   url: 'http://localhost:3000/stories/' + story.id,
        //   type: 'DELETE'
        // });
        
      },
      editStory: function(story) {
        console.log('editStory');
        this.$http.patch('http://localhost:3000/stories/' + story.id, story);
        story.editing = false;
      },
      storeStory: function(story){
        this.$http.post('http://localhost:3000/stories/', story).then(function(response) {
          Vue.set(story, 'id', response.data.id);
          story.editing = false;
          // vm.fetchStories();
        })
      },
    }
});


var vm = new Vue({
  el: '#app',
  data: {
    stories: []
  },
  mounted: function(){
    console.log('### @-@ mounted ###');
    // $.get('http://localhost:3000/stories', function(data){
    //   console.log(data);
    //   vm.stories = data;
    // })
    this.fetchStories()
  },
  methods: {
    createStory: function(){
      var newStory = {
        "plot":  "",
        "upvotes": 0,
        "editing": true
      };
      this.stories.push(newStory);
    },
    fetchStories: function(){
      this.$http.get('http://localhost:3000/stories')
        .then(function(response){
          var storiesReady = response.data.map(function(story){
            story.editing = false;
            return story
        });
          this.stories = storiesReady;
    })
      },

  },

})