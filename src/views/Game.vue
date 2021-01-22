<template>
  <!-- <div class="about">
       <h1>So, Who Am I?</h1>
       <GameBoard />
       </div> -->

  <div>
    <div class="container" style="margin-top: 50px;">
      <div v-if="room.length > 0" class="row">
        <game-room></game-room>
      </div>

      <div v-else>
        <div class="row">
          <form class="form-container" @submit.prevent='createRoom' style="background-color: #322f3d; margin-top: 200px; padding: 50px; width: auto; margin: auto; margin-top: 100px; border-color: #cc0e74; border-style: solid; border-radius: 25px;">
            <h3 class="welcome" style="color: #e6739f;">Create Room?</h3>
            <div class="mb-3">
              <label for="roomName" class="form-label" style="margin-top: 20px; color: #e6739f;"><h5>Put room name here!</h5></label>
              <input type="text" class="form-control" aria-describedby="nameHelp" id="room-name" v-model="input" required>
            </div>
            <button type="submit" class="btn btn-dark">Create room</button>
          </form>
        </div>
        <h3 class="welcome" style="color: #e6739f;">Room List</h3>
        <div class="row">
          <room-card
            v-for="room in rooms"
            :key="room.id"
            :room="room"></room-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameRoom from '../components/GameRoom'
import RoomCard from '../components/RoomCard'

export default {
  name: 'Game',
  data () {
    return {
      input: ''
    }
  },
  components: {
    GameRoom, RoomCard
  },
  computed: {
    room () {
      return this.$store.state.room
    },
    rooms () {
      return this.$store.state.rooms
    },
    user () {
      return this.$store.state.username
    }
  },
  methods: {
    createRoom () {
      console.log('aaasf', this.input)
      this.$socket.emit('createRoom', this.user, this.input)
      this.$store.commit('joinRoom', this.input)
      this.input = ''
    }
  }
}
</script>
