<template>
  <div class="game_cell">
    <div>
      <h3 class="text-capitalize font-weight-light">a1</h3>
      <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameField',
}
</script>

<style>
.game_cell {
  height: 160px;
  width: 160px;
  outline: solid 1px #000000;
}
</style>
