<template>
     <div class="row">
       <input
         class="input"
         :class="inputClass"
         :name="name"
         :type="type"
         @input="update"
         :value.prop="value"
         :placeholder="placeholder"/> 
     </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
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
    },
  },

}
</script>