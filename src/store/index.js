import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room: 'default',
    isStarted: false,
    isLose: false,
    questions: [],
    scores: [],
    username: '',
    users: [],
    message: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload
    },
    SOCKET_getAllUsers (state, payload) {
      state.users = payload
    },
    SOCKET_initQuiz (state, questions) {
      state.questions = questions
    },
    SOCKET_startGame (state) {
      state.isStarted = true
    },
    SOCKET_updateScores (state, scores) {
      state.scores = scores.sort((a, b) => {
        return b.score - a.score
      })
    },
    SOCKET_sendMessages (state, payload) {
      state.message.push(payload)
    },
    SOCKET_playerLose (state) {
      state.isLose = true
    },
    finishGame (state) {
      state.isStarted = false
      state.scores = []
    },
    changeUsername (state, name) {
      state.username = name
    }
  },
  actions: {

  },
  modules: {
  }
})
