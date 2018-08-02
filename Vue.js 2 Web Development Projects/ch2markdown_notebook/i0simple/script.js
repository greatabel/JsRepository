new Vue({
    el: '#notebook',
    data () {
        return {
            // content: 'This is a **note** !'
            content: localStorage.getItem('content') || 'You can write in **markdown** !'
        }
    },

    computed: {
        notePreview () {
            return marked(this.content)
        },
    },

    // created() {
    //     this.content = localStorage.getItem('content') || 'You can write in **markdown** !'
    // },

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
        // content(val, oldVar) {
        //     console.log('new note:', val, 'old note:', oldVar);
        //     localStorage.setItem('content', val)
        // },
        content: 'saveNote',
    },

    methods: {
        saveNote () {
            console.log('saving note:', this.content);
            localStorage.setItem('content', this.content);
            this.reportOperation('saving');
        },
        reportOperation (opName){
            console.log('The', opName, 'operation was completed!')
        }
    }

})

// console.log('## restored note:', localStorage.getItem('content'))