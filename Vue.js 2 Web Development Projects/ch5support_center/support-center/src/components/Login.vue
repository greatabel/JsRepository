<template>
<main class="login">
    <h1>登陆以继续</h1>
    <SmartForm
         class="form"
         :title="title"
         :operation="operation"
         :valid="valid">

        <FormInput 
        name="username"
        v-model="username"
        placeholder="用户名" />

        <FormInput
        name="password" 
        type="password" 
        v-model="password" 
        placeholder="密码" />

        <template v-if="mode === 'signup'">
            <FormInput
               name="verify-password"
               type="password"
               v-model="password2"
               placeholder="重新输入密码"
               :invalid="retypePasswordError" />
            <FormInput
            name="email" 
            type="email" 
            v-model="email" 
            placeholder="邮箱" />
        </template>

    </SmartForm>

</main>    
</template>

<script>
   export default {
  data () {
    return {
      mode: 'login',
      username: '',
      password: '',
      password2: '',
      email: '',
    }
  },
  computed: {
    title () {
        switch (this.mode) {
            case 'login': return 'login'
            case 'signup': return 'Create a new account'
        }
    },
    retypePasswordError () {
    return this.password2 && this.password !== this.password2
    },
    signupValid () {
      return !!this.password2 && !!this.email && !this.retypePasswordError
    },

    valid () {
      return !!this.username && !!this.password &&
      (this.mode !== 'signup' || this.signupValid)
    },

  },

  methods: {
    async operation() {
      await this[this.mode]()
    },

    async login () {
      this.$state.user = await this.$fetch('login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })
      this.$router.replace(this.$route.params.wantedRoute || { name: 'home' })
    },

    async signup () {
      await this.$fetch('signup', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email,
        }),
      })
      this.mode = 'login'
    },
  },


}
</script>