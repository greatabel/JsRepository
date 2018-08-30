<template>
    <nav class="menu">
        <router-link :to="{ name: 'home'}" exact>主页 </router-link>
        <router-link :to="{ name: 'faq'}" >FAQ </router-link>
        <router-link :to="{ name: 'tickets' }">支持请求</router-link>
        <div class="spacer"></div>

        <template v-if="$state.user">
          <a>{{ $state.user.username }}</a>
          <a @click="logout">Logout</a>
        </template>
        <router-link v-else :to="{name: 'login'}">Login</router-link>

    </nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.router-link-active {
    border-bottom-color: $primary-color;
}

</style>

<script>
export default {
  methods: {
    async logout () {
      const result = await this.$fetch('logout')
      if (result.status === 'ok') {
        this.$state.user = null
        // Return to home if page is private
        if (this.$route.matched.some(m => m.meta.private)) {
          this.$router.push({ name: 'home' })
        }
      }
    },
  },
}
</script>