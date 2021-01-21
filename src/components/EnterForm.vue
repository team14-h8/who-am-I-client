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
      username: ''
    }
  },
  methods: {
    playGame () {
      this.$router.push('/game')
    }
  }
}
</script>

<style>

</style>
