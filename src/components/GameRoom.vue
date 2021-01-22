<template>
  <div>
    <div v-if="!isStarted">
      <h1>Please wait</h1>
      <button @click.prevent="playerStartGame" class="btn btn-primary">Start</button>
    </div>
    <quiz v-else></quiz>
    <leader-board></leader-board>
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
        console.log('You lose')
        this.$store.commit('finishGame')
      }
    }
  }
}
</script>

<style scoped>

</style>
