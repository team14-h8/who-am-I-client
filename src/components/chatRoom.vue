<template>
  <div class="col-sm-3">
      <div class="card">
          <h3>Adu Jotos room</h3>
          <div class="card-body">
              <div class="card-messages">
                  <div v-for="(obj, i) in messages" :key="i">
                      <p> {} </p>
                  </div> <br>
                    <form @submit.prevent="sendMessage">
                        <input class="rounded" v-model="inputMessage" type="text">
                            <button href="#" class="btn btn-primary">send</button>
                    </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ChatRoom',
    computed: {
        messages () {
            return this.$store.state.messages
        }
    }, 

}
</script>

<style>

</style>