<template>
  <div class="game_cell">
    <div>
      <h3 class="text-capitalize font-weight-light">{{ column }}{{ row }}</h3>
    </div>
    <div v-if="isHeart" class="heart text-center py-3">
      <b-icon icon="heart-fill" font-scale="4"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameField',
  props: ['column', 'row', 'heart'],
  created() {},
  computed: {
    isHeart() {
      return this.column + this.row === this.heart
    },
  },
}
</script>

<style>
.game_cell {
  height: 160px;
  width: 160px;
  outline: solid 1px #050505;
}
</style>
