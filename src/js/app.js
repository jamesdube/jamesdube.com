import Vue from 'vue'
window.Vue = Vue

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './routes'

require('./components')

try{
	window.$ = window.jQuery = require('jquery-slim');
	window.Popper = require('./popper.min')
	require('./bootstrap.min')
} catch (e) {
	console.log(e)
}



new Vue({
	el : '#app',
	router : router
})