import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soal: [
      {
        image: "https://i.ibb.co/SvS3F0z/najwa-pixelated.png",
        answer: "najwa shihab"
      },
      {
        image: "https://i.ibb.co/KsZz0bj/jokowi-pixelated.png",
        answer: "joko widodo"
      },
      {
        image: "https://i.ibb.co/VpCCG6q/anya-pixelated.png",
        answer: "anya geraldine"
      },
      {
        image: "https://i.ibb.co/QNrPhpK/ahmad-dhani-pixelated.png",
        answer: "ahmad dhani"
      },
      {
        image: "https://i.ibb.co/T8HPG6B/agnes-mo-pixelated.png",
        answer: "agnes monica"
      },
      {
        image: "https://i.ibb.co/ynkRNR5/raff-ahmad-pixelated.png",
        answer: "raffi ahmad"
      }
    ],
    
    users: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload
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
