new Vue({
    el: '#notebook',
    data () {
        return {
            // content: 'This is a **note** !'
            content: localStorage.getItem('content') || 'You can write in **markdown** !',
            notes: [],
            // notes: [{id: 0, content: ''}],
            selectedId: 0,
        }
    },

    computed: {
        selectedNote () {
          // We return the matching note with selectedId
          return this.notes.find(note => note.id === this.selectedId)
        },
        notePreview () {
            return this.selectedNote ? marked(this.selectedNote.content) : ''
        },
        addButtonTitle () {
            return this.notes.length + ' 纪录已经被添加！'
        }
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
        addNote () {
            const time = Date.now()
            const note = {
                id: String(time),
                title: '新纪录 ' + (this.notes.length + 1),
                content: '**Hi!** This notebook is using [markdown]\
                            (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created: time,
                favorite: false,
       
            }
            this.notes.push(note)
            console.log("notes.length=", this.notes.length)

        },

        selectNote (note) {
          // This will update the 'selectedNote' computed property
          this.selectedId = note.id
        },
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