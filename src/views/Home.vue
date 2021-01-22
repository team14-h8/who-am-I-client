<template>
  <div class="home">
    <p> Welcome to Who Am I! </p>
    <EnterForm />
    <game-room></game-room>
  </div>
</template>

<script>
// @ is an alias to /src
import EnterForm from '@/components/EnterForm'
import GameRoom from '../components/GameRoom'

export default {
  name: 'Home',
  components: {
    EnterForm, GameRoom
  }
}
</script>
