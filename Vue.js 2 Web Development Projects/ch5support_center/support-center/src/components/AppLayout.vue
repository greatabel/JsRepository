<template>
<div class="app-layout">
    <header class="header">
        <div>
            <img class="img"
         src="../assets/logo.svg"/>
        </div>
        <div>我的衬衫商店</div>
    </header>
             <!-- Menu will be here -->
<router-view /> </div>
</template>

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