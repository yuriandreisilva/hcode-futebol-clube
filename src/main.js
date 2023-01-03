import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '@/store/store'
import App from './App.vue'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
