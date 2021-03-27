// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NavBar from '@/components/NavBar'
import Position from '@/components/Position'
import ProductPage from '@/components/ProductPage'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#NavBar',
  router,
  components: { NavBar },
  template: '<NavBar/>'
})
new Vue({
  el: '#Position',
  router,
  components: { Position },
  template: '<Position/>'
})
new Vue({
  el: '#ProductPage',
  router,
  components: { ProductPage },
  template: '<ProductPage/>',
})

