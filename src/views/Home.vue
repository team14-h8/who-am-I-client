<template>
  <div class="home">
    <p>{{ welcomeMessage }} </p>
    <EnterForm />
  </div>
</template>

<script>
// @ is an alias to /src
import EnterForm from '@/components/EnterForm'

export default {
  name: 'Home',
  data () {
    return {
      welcomeMessage: ''
    }
  },
  components: {
    EnterForm
  },
  sockets: {
    init (payload) {
      this.welcomeMessage = payload.message
      console.log(payload)
    }
  }
}
</script>
