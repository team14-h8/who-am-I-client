<template>
  <div class="container">
    <div class="row">
      <form class="form-container" @submit.prevent='playGame' style="background-color: #322f3d; margin-top: 200px; padding: 50px; width: auto; margin: auto; margin-top: 100px; border-color: #cc0e74; border-style: solid; border-radius: 25px;">
        <h3 class="welcome" style="color: #e6739f;">Wanna play Who Am I?</h3>
        <div class="mb-3">
          <label for="playerName" class="form-label" style="margin-top: 20px; color: #e6739f;"><h5>Put your name here!</h5></label>
          <input type="text" class="form-control" aria-describedby="nameHelp" id="player-name" v-model='username'>
        </div>
        <button type="submit" class="btn btn-dark">Start the Game!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterForm',
  data () {
    return {
      username: '',
      score: 0
    }
  },
  methods: {
    playGame () {
      this.$socket.emit('newPlayer', { username: this.username, score: this.score })
      this.$store.commit('changeUsername', this.username)
      this.$router.push('/game')
    }
  }
}
</script>

<style>

</style>
