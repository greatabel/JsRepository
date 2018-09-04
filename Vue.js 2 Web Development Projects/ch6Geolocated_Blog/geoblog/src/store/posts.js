export default {
    namespaced: true,
    state () { 
     return {
    // New post being created
    draft: null,
    // Bounds of the last fetching
    // To prevent refetching
    mapBounds: null,
    // Posts fetched in those map bounds posts: [],
    // ID of the selected post selectedPostId: null,
    } 
    
    },

    getters: {
        draft: state => state.draft,
        posts: state => state.posts,
        // The id field on posts is '_id' (MongoDB style) 
        selectedPost: state => state.posts.find(p => p._id === state.selectedPostId),
        // The draft has more priority than the selected post 
        currentPost: (state, getters) => state.draft || getters.selectedPost,
    },

    mutations: {
    addPost (state, value) {
           state.posts.push(value)
    },
    draft (state, value) { 
        state.draft = value
    },
    posts (state, { posts, mapBounds }) { 
        state.posts = posts 
        state.mapBounds = mapBounds
    },
    selectedPostId (state, value) { 
        state.selectedPostId = value
    },
    updateDraft (state, value) { 
        Object.assign(state.draft, value)
        }, 
    },

}