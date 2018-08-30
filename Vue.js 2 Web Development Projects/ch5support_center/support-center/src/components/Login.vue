<template>
<main class="login">
    <h1>登陆以继续</h1>
    <form>
        <FormInput 
          name="username"
          v-model="username"
          placeholder="用户名" />
    </form>
</main>    
</template>

<script>
   export default {
     data () {
       return {
         username: '',
       }
}, }
</script>