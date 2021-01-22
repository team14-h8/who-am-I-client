<template>
  <div class="col-md-4"
    style="background-color: #322f3d; height: 550px ; border-radius: 25px 0px 0px 25px; border-color: #cc0e74; border-style: solid">
    <!-- Leaderboard -->
    <div class="row">
      <h4 style="text-align: center; margin-top: 10px; color: #e6739f;">Leaderboard:</h4>
    </div>
    <div class="row" style="margin-top: 20px">
      <!-- Name -->
      <h5 style="text-align: center; color: #e6739f">Name</h5>
      <player-score-row
        v-for="score in scores"
        :key="score.id"
        :score="score"></player-score-row>
    </div>
  </div>
  <!-- <table class="table">
       <tr>
       <th>Name</th>
       <th>Score</th>
       </tr>
       <player-score-row
       v-for="score in scores"
       :key="score.user"
       :score="score"></player-score-row>
       </table> -->
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
