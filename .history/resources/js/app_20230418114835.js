/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
 

import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from './components/ExampleComponent.vue';
 

Vue.use(VueRouter);
  
const router = new VueRouter({
    mode:"history",
    routes: [
        {
            path: '/',
            component: Example,
            
        }, 
         
    ]
});
 
new Vue(Vue.util.extend({ router }, Example)).$mount('#app');

