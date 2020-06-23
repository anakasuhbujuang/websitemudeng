import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

import vuetify from './plugins/vuetify';

//Title
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: Routes
})

new Vue({
  el: '#app',
  vuetify,
  router: router,
  render: h => h(App)
  

})

 .$mount('#app')
