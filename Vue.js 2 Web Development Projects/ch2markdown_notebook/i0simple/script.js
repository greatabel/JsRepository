new Vue({
    el: '#notebook',
    data () {
        return {
            content: 'This is a **note** ! \
            <span style="color:red">test color</span>'
        }
    },

    computed: {
        notePreview () {
            return marked(this.content)
        },
    },

    // watch: {
    //     content:{
    //         handler(val, oldVar) {
    //             console.log('new note:', val, 
    //                         'old note:', oldVar);
    //         },
    //     // immediate: true,
    //     }
    // }
    watch: {
        content(val, oldVar) {
            console.log('new note:', val, 'old note:', oldVar);
        },
    }

})