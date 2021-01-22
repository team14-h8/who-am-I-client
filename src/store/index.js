import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: '',
    isStarted: false,
    isLose: false,
    questions: [],
    scores: [],
    username: '',
    users: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.users = payload
    },
    SOCKET_getAllUsers (state, payload) {
      state.users = payload
    },
    SOCKET_getAllRooms (state, rooms) {
      state.rooms = rooms
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
    SOCKET_playerLose (state) {
      state.isLose = true
    },
    finishGame (state) {
      state.isStarted = false
      state.scores = []
    },
    changeUsername (state, name) {
      state.username = name
    },
    joinRoom (state, room) {
      state.room = room
    }
  },
  actions: {

  },
  modules: {
  }
})
