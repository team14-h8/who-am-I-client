import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// this is a comment to start development branch
Vue.config.productionTip = false

// SWAL2
Vue.use(VueSweetalert2)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5002',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
