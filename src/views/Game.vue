<template>
  <!-- <div class="about">
       <h1>So, Who Am I?</h1>
       <GameBoard />
       </div> -->

  <div>
    <div class="container" style="margin-top: 50px;">
      <div class="row">
        <game-room></game-room>
      </div>
    </div>
  </div>
</template>

<script>
import GameRoom from '../components/GameRoom'

export default {
  name: 'Game',
  components: {
    GameRoom
  }
}
</script>
