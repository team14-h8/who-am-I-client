<template>
  <div class="card" style="background-color: #322f3d; margin-top: 200px; padding: 50px; width: auto; margin: auto; margin-top: 100px; border-color: #cc0e74; border-style: solid; border-radius: 25px;">
    <span>{{ room.id }}</span>
    <button @click.prevent="joinRoom(room.id)" class="btn btn-sm btn-warning mt-3">Join</button>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['room'],
  computed: {
    user () {
      return this.$store.state.username
    }
  },
  methods: {
    joinRoom (roomId) {
      this.$socket.emit('joinRoom', this.user, roomId)
      this.$store.commit('joinRoom', roomId)
    }
  }
}
</script>

<style scoped>
span {
  color: #e6739f;
}
</style>
