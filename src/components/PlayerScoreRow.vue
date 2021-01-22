<template>
  <div class="row">
    <div class="col-9">
      <span>{{ score.user }}</span>
    </div>
    <div class="col-3">
      <span>{{ score.score }}</span>
    </div>
  </div>
  <!-- <tr>
       <td>{{ score.user }}</td>
       <td>{{ score.score }}</td>
       </tr> -->
</template>

<script>
export default {
  name: 'PlayerScoreRow',
  props: ['score']
}
</script>

<style scoped>
span {
  color: #e6739f;
}
</style>
