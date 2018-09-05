import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'

import VueMeteorTracker from 'vue-meteor-tracker'

Vue.use(VueMeteorTracker)


Meteor.startup(() => {
    new Vue({
        el: '#app',
        router,
        ...App,
    })
})