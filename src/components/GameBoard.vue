<template>
  <div class="container" style="margin-top: 50px;">
    <div class="row">
      <h4 style="text-shadow: 0 0 3px #333456, 0 0 5px #cc0e74; text-align: center; color: #d54062; margin-bottom: 20px">{{ message }}</h4>
    </div>
    <div class="row">
      <div class="col-md-3"
        style="background-color: #322f3d; height: 550px ; border-radius: 25px 0px 0px 25px; border-color: #cc0e74; border-style: solid">
        <!-- Leaderboard -->
        <div class="row">
          <h4 style="text-align: center; margin-top: 10px; color: #e6739f;">Leaderboard:</h4>
        </div>
        <div class="row" style="margin-top: 20px">
          <!-- Name -->
          <h5 style="text-align: center; color: #e6739f" v-for='user in users' :key='user.id'>{{ user.username }} : {{user.point }}</h5>
        </div>
      </div>
      <div class="col-md-6"
        style="background-color: #333456; border-radius: 0px 25px 25px 0px; border-color: #cc0e74; border-style: solid">
        <div class="row">
          <!-- Image diambil dari tabungan soal di state-->
          <img src="https://i.ibb.co/KsZz0bj/jokowi-pixelated.png" alt="Girl in a jacket" height="300"
            style="margin: auto; margin-top: 50px; width: auto">
        </div>
        <div class="row" style="margin-top: 50px;">
          <!-- Jawaban diambil dari jawaban yang ada di state -->
          <form>
            <h3 style="color: #eeeeee">Put your guess here!</h3>
            <input type="email" class="form-control" aria-describedby="emailHelp">
            <button class="btn btn-danger mt-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
      
      <!-- CHAT ROOM -->
      <div class="col-md-6"
        style="background-color: #333456; border-radius: 0px 25px 25px 0px; border-color: #cc0e74; border-style: solid">
        <div class="row">
          <!-- Image diambil dari tabungan soal di state-->
          <img src="https://i.ibb.co/KsZz0bj/jokowi-pixelated.png" alt="Girl in a jacket" height="300"
            style="margin: auto; margin-top: 50px; width: auto">
        </div>
        <div class="row" style="margin-top: 50px;">
          <!-- Jawaban diambil dari jawaban yang ada di state -->
          <form>
            <h3 style="color: #eeeeee">Put your guess here!</h3>
            <input type="email" class="form-control" aria-describedby="emailHelp">
            <button class="btn btn-danger mt-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
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
