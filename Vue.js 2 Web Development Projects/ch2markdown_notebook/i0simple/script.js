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

})