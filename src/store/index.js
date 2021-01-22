import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    welcomeMessage: {}
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.welcomeMessage = payload.message
    },
    SOCKET_getAllUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
