import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import UserProfile from './components/UserProfile'
import UserEdit from './components/UserEdit'
Vue.component('user-profile', UserProfile)
Vue.component('user-edit', UserEdit)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
