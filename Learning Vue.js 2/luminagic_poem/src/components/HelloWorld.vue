<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>拼古诗游戏</h2>
     <drag class="drag" :transfer-data="{ draggable }">{{ draggable }}</drag>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <drop class="drop" >白</drop>
     <drop class="drop" @drop="handleDrop">&nbsp;&nbsp;</drop>
     <drop class="drop" >依</drop>
     <drop class="drop" >山</drop>
     <drop class="drop" >尽</drop>
  </div>



</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

export default {
  components: { Drag, Drop },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      draggable: '日'
    }
  },
  methods:{
    handleDrop(data, event) {
      alert(`你移动啦模块: ${JSON.stringify(data)}`);
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .drag,
    .drop {
      font-family: sans-serif;
      display: inline-block;
      border-radius: 10px;
      background: #ccc;
      position: relative;
      padding: 30px;
      text-align: center;
      vertical-align: top;
    }

    .drag {
      color: #fff;
      cursor: move;
      background: #777;
      border-right: 2px solid #555;
      border-bottom: 2px solid #555;
    }

    .drop {
      background: #eee;
      border-top: 2px solid #ccc;
      border-left: 2px solid #ccc;
    }
</style>
