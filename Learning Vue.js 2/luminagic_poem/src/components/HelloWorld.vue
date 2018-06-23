<template>
  <div class="hello">
    <h1 style="color:blue">{{ msg }}</h1>
    <!-- <h2 style="color:green">拼古诗游戏</h2> -->
     <drag v-bind:class="start_class" :transfer-data="{ draggable }">{{ draggable }}</drag>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <drop v-bind:class="target_class" >白</drop>
     <drop v-bind:class="target_class" @drop="handleDrop">{{poem_target}}</drop>
     <drop v-bind:class="target_class" >依</drop>
     <drop v-bind:class="target_class" >山</drop>
     <drop v-bind:class="target_class" >尽</drop>
  </div>



</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

export default {
  components: { Drag, Drop },
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到拼古诗游戏',
      poem_target: '?',
      start_class: 'drag',
      target_class: 'drop',
      draggable: '日'
    }
  },
  methods:{
    handleDrop(data, event) {
      // alert(`你移动啦模块: ${JSON.stringify(data)}`);
      
      this.poem_target = '日';
      this.target_class = 'drop_finish';
      this.start_class = 'drag drag_finish';
      // alert(`恭喜你拼正确啦古诗`);

    },
  }

}
</script>

<!-- https://stackoverflow.com/questions/45572731/i-am-attempting-to-add-a-background-image-to-my-vue-js-project -->
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

    .drop_finish {
      font-family: sans-serif;
      display: inline-block;
      border-radius: 10px;
      background: pink;
      position: relative;
      padding: 30px;
      text-align: center;
      vertical-align: top;
    }
    
    .drag_finish {
      opacity: 0.01;
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
