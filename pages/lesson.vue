<template>
  <div>
    <div>
      <b-btn class="btn-danger" to="/">Give up</b-btn>
    </div>
    <div class="game_field d-flex align-content-stretch flex-wrap">
      <game-field ref="a1" class="game_cell"></game-field>
      <div ref="a2" class="game_cell">
        <h3 class="text-capitalize font-weight-light">a2</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="a3" class="game_cell">
        <h3 class="text-capitalize font-weight-light">a3</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="b1" class="game_cell">
        <h3 class="text-capitalize font-weight-light">b1</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="b2" class="game_cell">
        <h3 class="text-capitalize font-weight-light">b2</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="b3" class="game_cell">
        <h3 class="text-capitalize font-weight-light">b3</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="c1" class="game_cell">
        <h3 class="text-capitalize font-weight-light">c1</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="c2" class="game_cell">
        <h3 class="text-capitalize font-weight-light">c2</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
      <div ref="c3" class="game_cell">
        <h3 class="text-capitalize font-weight-light">c3</h3>
        <div class="heart text-center py"><b-icon icon="heart-fill" font-scale="4"></b-icon></div>
      </div>
    </div>
    <div class="heart text-center py-3">
      <b-icon icon="heart-fill" font-scale="4"></b-icon>
    </div>
    <h3 class="text-center font-italic">Steps</h3>
    <div>
      <div class="text-center py-2">
        <b-btn class="btn-dark"><b-icon icon="arrow-up"></b-icon></b-btn>
      </div>
      <div class="text-center">
        <b-btn class="btn-dark"><b-icon icon="arrow-left"></b-icon></b-btn>
        <b-btn class="btn-dark mx-1"><b-icon icon="arrow-down"></b-icon></b-btn>
        <b-btn class="btn-dark"><b-icon icon="arrow-right"></b-icon></b-btn>
      </div>
    </div>
  </div>
</template>
<style>
.game_field {
  height: 484px;
  width: 484px;
  border: 2px solid #090709;
}
.heart {
  color: red;
}
</style>
<script>
export default {
  name: 'app',
}
</script>
