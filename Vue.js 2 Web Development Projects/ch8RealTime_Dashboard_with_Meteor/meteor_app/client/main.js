import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'


Meteor.startup(() => {
    new Vue({
        el: '#app',
        router,
        ...App,
    })
})