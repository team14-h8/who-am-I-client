<template>
  <tr>
    <td>{{ score.user }}</td>
    <td>{{ score.score }}</td>
  </tr>
</template>

<script>
export default {
  name: 'PlayerScoreRow',
  props: ['score']
}
</script>

<style scoped>

</style>
