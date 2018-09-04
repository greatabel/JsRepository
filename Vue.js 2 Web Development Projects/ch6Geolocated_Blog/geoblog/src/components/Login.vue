<template>
           <div class="welcome">
             <h1>Welcome</h1>
<div class="actions">
<button @click="openGoogleSignin">
                 Sign in with Google
               </button>
</div>
</div>
</template>
   
<script>
export default {
    methods: { 
        openGoogleSignin () {
            // TODO 
            const url = 'http://localhost:3000/auth/google'
            const name = 'google_login'
            const specs = 'width=500, height=500'
            window.open(url, name, specs)
        },
        handleMessage({data, origin}){
            if (origin !== 'http://localhost:3000') {
                return 
            }
            if (data === 'success') {
                this.login()
            }
        },
    }, 
}
</script>