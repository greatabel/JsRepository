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
    },
    mutations: {
        center (state, value){
            state.center = value
        },
        zoom (state, value){
            state.zoom = value
        },
    },
    actions: {
        setCenter({ commit }, value) {
            commit('center', value)
        },
        setZoom({ commmit }, value) {
            commmit('zoom', value)
        },
    },
}