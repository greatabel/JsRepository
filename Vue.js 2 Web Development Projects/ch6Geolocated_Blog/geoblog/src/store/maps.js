export default {
    namespaced: true,

    state () {
        return {
          center: {
            lat: 48.8538302,
            lng: 2.2982161,
          },
          userPosition: null,
          zoom: 15,
            }
    },
    getters: {
        center: state => state.center,
        zoom: state => state.zoom,
        userPosition: state => state.userPosition,
    },
    mutations: {
        center (state, value){
            state.center = value
        },
        zoom (state, value){
            state.zoom = value
        },
        userPosition (state, value) { 
            state.userPosition = value
        },
    },
    actions: {
        setCenter({ commit }, value) {
            commit('center', value)
        },
        setZoom({ commmit }, value) {
            commmit('zoom', value)
        },
        setUserPosition ({ dispatch, commit, getters }, value) {
          const position = getters.userPosition
          commit('userPosition', value)
          // Initial center on user position
          if (!position) {
            dispatch('centerOnUser')
          }
        },
        async centerOnUser ({ dispatch, getters }) {
          const position = getters.userPosition
          if (position) {
            dispatch('setCenter', position)
          }
        },

        
    },
}