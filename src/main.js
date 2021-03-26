import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
