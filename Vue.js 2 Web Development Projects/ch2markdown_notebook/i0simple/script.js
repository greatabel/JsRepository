Vue.filter('date', time => moment(time).format('YYYY-MM-DD, HH:mm'))

new Vue({
    el: '#notebook',
    data () {
        return {
            // content: 'This is a **note** !'
            content: localStorage.getItem('content') || 'You can write in **markdown** !',
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            // notes: [{id: 0, content: ''}],
            selectedId: localStorage.getItem('selected-id') || null,
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
        },
        
        sortedNotes () {
          return this.notes.slice().sort((a, b) => a.created - b.created)
          .sort((a, b) => (a.favorite === b.favorite)? 0 : a.favorite? -1 : 1)
        },

        lineCount () {
            if (this.selectedNote) {
                return this.selectedNote.content.split(/\r\n|\r|\n/).length
            }
        },
        wordsCount () {
            if (this.selectedNote) {
                var s = this.selectedNote.content
                s = s.replace(/\n/g, ' ')
                // Exclude start and end white-spaces
                s = s.replace(/(^\s*)|(\s*$)/gi, '')
                // Turn 2 or more duplicate white-spaces into 1
                s = s.replace(/[ ]{2,}/gi, ' ')
                // Return the number of spaces
                return s.split(' ').length
            }
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
        // content: 'saveNote',
        notes: {
            handler: 'saveNotes',
            deep: true,
               },

        selectedId (val) {
            localStorage.setItem('selected-id', val)
        },

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

        removeNote () {
            if(this.selectNote && window.confirm('是否删除该条记录?')) {
                const index = this.notes.indexOf(this.selectedNote)
                if (index != -1){
                    this.notes.splice(index, 1)
                }
            }
        },

        selectNote (note) {
          // This will update the 'selectedNote' computed property
          this.selectedId = note.id
        },
        // saveNote () {
        //     console.log('saving note:', this.content);
        //     localStorage.setItem('content', this.content);
        //     this.reportOperation('saving');
        // },
        saveNotes (){
            localStorage.setItem('notes', JSON.stringify(this.notes))
            console.log('### Notes saved!', new Date())
        },
        // reportOperation (opName){
        //     console.log('The', opName, 'operation was completed!')
        // }
        favoriteNote () {
          // this.selectedNote.favorite = !this.selectedNote.favorite
          // this.selectedNote.favorite = this.selectedNote.favorite ^ true
          this.selectedNote.favorite ^= true
        },
    }

})

// console.log('## restored note:', localStorage.getItem('content'))