<template>
   <div class="app-menu">
     <div class="header">
       <i class="material-icons">place</i>
       GeoBlog
    </div>
     <div class="user">
       <div class="info" v-if="user">
         <span class="picture" v-if="userPicture">
           <img :src="userPicture" />
         </span>
         <span class="username">{{ user.profile.displayName }}
         </span>
       </div>
       <a @click="centerOnUser"><i class="material-icons">my_location</i>
     </a>
     <a @click="logout"><i class="material-
     icons">power_settings_new</i>
     </a>
    </div>
    </div>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.state.user
        },
        userPicture () {
            return null
        },
    },
    methods: {
        centerOnUser (){

        },
        logout () {

        },
    }
}
</script>
