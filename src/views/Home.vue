<template>
  <div class="home">
    <p>{{ welcomeMessage }} </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      welcomeMessage: ''
    }
  },
  sockets: {
    init (payload) {
      this.welcomeMessage = payload.message
      console.log(payload)
    }
  }
}
</script>
