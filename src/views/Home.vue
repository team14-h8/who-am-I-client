<template>
  <div class="home">
    <p>{{ welcomeMessage }} </p>
    <game-room></game-room>
  </div>
</template>

<script>
// @ is an alias to /src
import GameRoom from '../components/GameRoom'

export default {
  name: 'Home',
  data () {
    return {
      welcomeMessage: ''
    }
  },
  components: {
    GameRoom
  },
  sockets: {
    init (payload) {
      this.welcomeMessage = payload.message
      console.log(payload)
    }
  }
}
</script>
