<template>
  <div>
    <div v-if="!isStarted" class="box">
      <h1>Waiting...</h1>
      <button @click.prevent="playerStartGame" class="btn btn-danger mt-3 btn-lg">Start</button>
    </div>
    <div v-else class="row">
      <leader-board></leader-board>
      <quiz ></quiz>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Quiz from './Quiz'
import LeaderBoard from './LeaderBoard'

export default {
  name: 'GameRoom',
  components: {
    Quiz, LeaderBoard
  },
  computed: mapState([
    'isStarted', 'room', 'scores', 'isLose'
  ]),
  methods: {
    playerStartGame () {
      this.$socket.emit('playerStartGame', this.room)
    }
  },
  watch: {
    isLose: function (val, oldVal) {
      if (val) {
        this.$swal('You Lose!!!')
        this.$store.commit('finishGame')
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #e6739f;
}

.box {
  background-color: #322f3d;
  margin-top: 200px;
  padding: 50px;
  width: 700px;
  margin: auto;
  margin-top: 100px;
  border-color: #cc0e74;
  border-style: solid;
  border-radius: 25px;
}
</style>
