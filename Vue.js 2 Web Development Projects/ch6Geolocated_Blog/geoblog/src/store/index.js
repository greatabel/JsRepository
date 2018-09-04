import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // strict: true,
  state () {
    return {
      user: null,
    }
  },
  mutations: {
    user: (state, user) => {

        state.user = user
    },
  },

})

export default store