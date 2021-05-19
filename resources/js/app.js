require('./bootstrap');

import Vuetify from '../plugins/vuetify';
import Vue from 'vue';
import router from './router/index';
import App from './App.vue';


const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router,
    components: { App }
});
