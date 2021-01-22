<template>
  <!-- <form @submit.prevent="submitAnswer">
       <div class="row">
       <div class="mx-auto mb-3">
       <img alt="Gambar Soal" :src="questions[index].image_url" />
       </div>
       </div>
       <div class="row">
       <div class="mx-auto mb-3">
       <label class="form-label" for="answer-input">Answer</label>
       <input class="form-control" v-model="answer" name="answer-input" type="text" value=""/>
       </div>
       </div>
       </form> -->

  <div class="col-md-8"
    style="background-color: #333456; border-radius: 0px 25px 25px 0px; border-color: #cc0e74; border-style: solid">
    <div class="row">
      <!-- Image -->
      <img :src="questions[index].image_url" alt="Gambar Soal" height="300"
        style="margin: auto; margin-top: 50px; width: auto">
    </div>
    <div class="row" style="margin-top: 50px;">
      <!-- Jawaban -->
      <form @submit.prevent="submitAnswer">
        <h3 style="color: #eeeeee">Put your guess here!</h3>
        <input v-model="answer" type="text" class="form-control" id="answer-input" aria-describedby="answerInput">
        <button class="btn btn-danger mt-3" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Quiz',
  data () {
    return {
      answer: '',
      index: 0
    }
  },
  methods: {
    clearAnswer () {
      this.answer = ''
    },
    submitAnswer () {
      if (this.answer.toLowerCase() === this.questions[this.index].answer) {
        this.$socket.emit('correctAnswer', this.username, this.room)
        this.clearAnswer()
        this.nextQuestions()
      } else {
        this.$swal('Wrong answer')
      }
    },
    nextQuestions () {
      if (this.questions.length === this.index + 1) {
        this.$socket.emit('playerWin', this.username, this.room)
        this.playerWin()
      } else {
        this.index++
      }
    },
    playerWin () {
      const context = this
      this
        .$swal('Congratulations you win!')
        .then(function () {
          context.$store.commit('finishGame')
        })
    }
  },
  computed: mapState([
    'questions', 'room', 'username'
  ])
}
</script>

<style scoped>

</style>
