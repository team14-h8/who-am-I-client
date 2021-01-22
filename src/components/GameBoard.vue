<template>
  <div class='container' >
    <p>{{ message }}</p>
    <div v-for='user in users' :key='user.id'>
      <p>{{ user.username }}</p>
      <p>{{ user.point }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      message: 'youre inside the game!'
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style>

</style>
