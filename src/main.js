import Vue from 'vue'
import App from './App3.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-153997790-1',
  checkDuplicatedScript: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
