import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room: 'default',
    isStarted: false,
    isLose: false,
    questions: [],
    scores: []
  },
  mutations: {
    SOCKET_initQuiz (state, questions) {
      state.questions = questions
    },
    SOCKET_startGame (state) {
      state.isStarted = true
    },
    SOCKET_updateScores (state, scores) {
      state.scores = scores
    },
    SOCKET_playerLose (state) {
      state.isLose = true
    },
    finishGame (state) {
      state.isStarted = false
      state.scores = []
    }
  },
  actions: {

  },
  modules: {
  }
})
