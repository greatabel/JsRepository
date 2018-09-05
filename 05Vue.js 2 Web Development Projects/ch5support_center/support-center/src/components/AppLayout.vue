<template>
  <div class="app-layout">
    <header class="header">
      <div><img class="img" src="../assets/logo.svg"/></div>
      <div>我的寸衫商店</div>
    </header>
    <NavMenu />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'

export default {
  components: {
    NavMenu,
  },
}
</script>

<style lang="stylus">
@import '../style/main';
</style>

<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
