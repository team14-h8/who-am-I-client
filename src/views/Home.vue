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
  components: {
    EnterForm
  },
  computed: {
    welcomeMessage () {
      return this.$store.state.welcomeMessage
    }
  }
}
</script>
