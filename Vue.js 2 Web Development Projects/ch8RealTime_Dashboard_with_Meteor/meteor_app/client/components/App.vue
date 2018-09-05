<template>
    <div id="#app">
     <nav>
         <router-link :to="{ name: 'dashboard' }" exact>Dashboard</router-link>
         <router-link :to="{ name: 'generate' }" exact>Measure</router-link>
     </nav>
    </div>
</template>

<style lang="stylus" src="../style.styl" />