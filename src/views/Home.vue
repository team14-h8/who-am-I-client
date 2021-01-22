<template>
  <div class="home">
    <p> Welcome to Who Am I! </p>
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
  }
}
</script>
