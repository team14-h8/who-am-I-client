<template>
  <form @submit.prevent="submitAnswer">
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
  </form>
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
      if (this.answer === this.questions[this.index].answer) {
        this.$socket.emit('correctAnswer', this.$socket.id, this.room)
        this.clearAnswer()
        this.nextQuestions()
      } else {
        console.log('Wrong answer')
      }
    },
    nextQuestions () {
      if (this.questions.length === this.index + 1) {
        this.$socket.emit('playerWin', this.$socket.id, this.room)
        this.playerWin()
      } else {
        this.index++
      }
    },
    playerWin () {
      console.log('Congrats')
    }
  },
  computed: mapState([
    'questions', 'room'
  ])
}
</script>

<style scoped>
img {
  width: 300px;
}
</style>
