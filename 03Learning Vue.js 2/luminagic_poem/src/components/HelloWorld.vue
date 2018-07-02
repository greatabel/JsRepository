<template>
  <div class="hello">
    <h1 style="color:blue">{{ msg }}</h1>
    <!-- <h2 style="color:green">拼古诗游戏</h2> -->
     <drag v-bind:class="start_class" >{{ draggable }}</drag>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <drop v-bind:class="target_class" @drop="handleDrop(index)" 
           v-for="(word, index) in poems[which_poem][which_sentence]">

      <span v-if="index == target_index">{{poem_target}}</span>
      <span v-else>{{ word }}</span>
    </drop>

<!--      <br/>
     <drop v-bind:class="target_class" >白</drop>
     <drop v-bind:class="target_class" @drop="handleDrop">{{poem_target}}</drop>
     <drop v-bind:class="target_class" >依</drop>
     <drop v-bind:class="target_class" >山</drop>
     <drop v-bind:class="target_class" >尽</drop> -->

     <div>
     <pre style="background: pink"> {{ poems[which_poem][which_sentence] }} | {{ target_index}}
     {{ poems[which_poem][which_sentence][target_index] }}</pre>
    </div>

  </div>


  

</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';
import 'csshake';


export default {
  components: { Drag, Drop },
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到拼古诗游戏',
      poem_target: '?',
      start_class: 'drag',
      target_class: 'drop',
      
      poems: [['白日依山尽','黄河入海流' ,'欲穷千里目','更上一层楼'],
              ['空山不见人','但闻人语响','返景入深林','复照青苔上']],
      which_poem: 0,
      which_sentence: 0,
      
     
    }
  },
  computed: {
      target_index: function() {
       return Math.floor(Math.random() * 5)

      },
     draggable: function() {
      return this.poems[this.which_poem][this.which_sentence][this.target_index]
    }
  },
  methods:{
    handleDrop(index) {
      // alert(`你移动啦模块: ${JSON.stringify(data)}`);
      if(index == this.target_index){
        this.poem_target = '日';
        this.target_class = 'drop_finish shake-slow shake-constant';
        this.start_class = 'drag drag_finish';
        var that = this;
        // alert(`恭喜你拼正确啦古诗`);
        setTimeout(function(){
              that.target_class = 'drop_finish';

          }, 500);
      }


    },
  }

}
</script>

<!-- https://stackoverflow.com/questions/45572731/i-am-attempting-to-add-a-background-image-to-my-vue-js-project -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .drag,
    .drop {
      /*font-family: STKaiti, Helvetica, "Microsoft YaHei", Arial;*/
      font-size: 18pt;
      font-weight: bold;
      display: inline-block;
      border-radius: 10px;
      background: #ccc;
      position: relative;
      padding: 30px;
      text-align: center;
      vertical-align: top;
    }

    .drop_finish {
      /*font-family: STKaiti, Helvetica, "Microsoft YaHei", Arial;*/
      font-size: 18pt;
      font-weight: bold;
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
