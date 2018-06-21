// import Vue from 'vue'; 
// import Vuex from 'vuex'; 


Vue.use(Vuex); 

var store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todoText) {
      state.todos.push({
        text: todoText,
        done: false
      });
    },
    
    removeTodo(state, todo) {
      var index = state.todos.indexOf(todo);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
    
    updateTodo(state, todo) {
      var index = state.todos.indexOf(todo);
      if (index >= 0) {
        state.todos[index] = todo;
      }
    },
    
    loadJSON(state, json) {
      state.todos = JSON.parse(json);
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    },
    
    allTodos(state) {
      return state.todos;
    },
    
    toJSON(state) {
      return JSON.stringify(state.todos);
    }
  }
});

new Vue({
  el: '#app',
  store,
  data: function() {
    return {
      newTodoText: "",
      doneFilter: false
    }
  },
  methods: {
    saveState() {
      localStorage.setItem('todos', this.$store.getters.toJSON); 
    },
    loadState() {
      if (localStorage.getItem('todos')) {
        this.$store.commit('loadJSON', localStorage.getItem('todos'));  
      }
    },
    addTodo() {
      if (this.newTodoText != "") {
        this.$store.commit('addTodo', this.newTodoText);
        this.newTodoText = "";
        this.saveState();
      }
    },
    
    removeTodo(todo) {
      this.$store.commit('removeTodo', todo);
      this.saveState();
    },
    
    toggleDone(todo) {
      if (todo.done) {
        todo.done = false;
      } else {
        todo.done = true;
      }
      
      this.$store.commit('updateTodo', todo);
      this.saveState();
    }
  },
  computed: {
    todos() {
      if (this.doneFilter) {
        return this.$store.getters.doneTodos;
      } else {
        return this.$store.getters.allTodos;
      }
    }
  },
  mounted: function() {
    this.loadState();
  }
})