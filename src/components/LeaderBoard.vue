<template>
  <table class="table">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    <player-score-row
      v-for="score in scores"
      :key="score.user"
      :score="score"></player-score-row>
  </table>
</template>

<script>
import { mapState } from 'vuex'
import PlayerScoreRow from './PlayerScoreRow'

export default {
  name: 'LeaderBoard',
  components: {
    PlayerScoreRow
  },
  computed: mapState([
    'scores'
  ])
}
</script>

<style scoped>

</style>
