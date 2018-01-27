var data = {
  items: [{text: 'Banana', checked: true},
          {text: 'Apples', checked: false}],
  title: 'My Shopping List',
  newItem: ''
};

new Vue({
  el: '#app', 
  data: data
});