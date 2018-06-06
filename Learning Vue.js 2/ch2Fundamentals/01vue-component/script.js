var data = {
    items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
    title: 'My Shopping List',
    newItem: ''
};


/**
 * Declaring components
 */

var ItemsComponent = Vue.extend({
   data: function() {
        return data;
  },

  template: '<ul>' +
  '           <li v-for="item in items" :class="{ \'removed\': item.checked }">' +
  '             <div class="checkbox">' +
  '               <label>' +
  '                 <input type="checkbox" v-model="item.checked"> {{ item.text }}' +
  '               </label>' +
  '             </div>' +
  '           </li>' +
  '         </ul>'

});

Vue.component('items-component', ItemsComponent);

new Vue({
    el: '#app',
    data: data
});