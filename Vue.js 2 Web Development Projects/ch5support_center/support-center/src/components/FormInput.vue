<template>
     <div class="row">
       <input
         class="input"
         :class="inputClass"
         :name="name"
         :type="type"
         @input="update"
         :value.prop="text"
         :placeholder="placeholder"/> 
     </div>
</template>

<script>

export default {
  model: {
    prop: 'text', 
    event: 'update',
    },
  props: {
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    text: {
      required: true,
    },
    placeholder: {
      type: String,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputClass () {
      return {
        'invalid': this.invalid,
      }
    },
  },
  methods: {
    update (event) {
      console.log('update=>', event.currentTarget.value)
      this.$emit('update', event.currentTarget.value)
    },
  },

}
</script>