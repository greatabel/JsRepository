import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'

import VueMeteorTracker from 'vue-meteor-tracker'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'


Vue.use(VueMeteorTracker)

Vue.use(VueProgress, {
  defaultShape: 'semicircle',
})


Meteor.startup(() => {
    new Vue({
        el: '#app',
        router,
        ...App,
    })
})