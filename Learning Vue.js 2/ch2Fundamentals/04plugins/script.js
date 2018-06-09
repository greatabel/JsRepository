import Vue from '../vue2.0.3.js';
import VueMathPlugin from './VueMathPlugin.js';

Vue.use(VueMathPlugin);

new Vue({
  el: '#app',
  data: { item: 49 }
});