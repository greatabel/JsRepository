<template>
  <div id="app" class="container">
    <h2>{{ title }}</h2>
    <input type="text" v-model="title" >
    <add-item-component @add="add"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component></change-title-component>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent'

export default {
  // name: 'App',
  components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
  },
  data() {
    return {
      items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
      title: 'shopping-list',

    }
  },
  methods: {
    add (newItem) {
      alert('add ' + newItem)
    }
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
