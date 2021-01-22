<template>
  <div class='container'>
    <form @submit.prevent='playGame'>
      <input type='text' placeholder="Enter your username..."
      v-model='username'>
        <button type='submit' class='btn btn-sm btn-primary'>Let's play!</button>
    </form>
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
