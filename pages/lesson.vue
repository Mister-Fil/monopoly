<template>
  <div>
    <div>
      <b-btn class="btn-danger" href="/">Quit</b-btn>
    </div>
    <div class="game_field d-flex align-content-stretch flex-wrap">
      <game-field
        v-for="item in fields"
        :key="item.column + item.row"
        :column="item.column"
        :row="item.row"
        :heart="field.heart"
      ></game-field>
    </div>
    <div v-if="field.heart === ''" class="heart text-center py-3">
      <b-icon icon="heart-fill" font-scale="4"></b-icon>
    </div>
    <h3 class="text-center font-italic">Steps</h3>
    <div>
      <div class="text-center py-2">
        <b-btn @click="up" class="btn-dark"><b-icon icon="arrow-up"></b-icon></b-btn>
      </div>
      <div class="text-center">
        <b-btn @click="left" class="btn-dark"><b-icon icon="arrow-left"></b-icon></b-btn>
        <b-btn @click="down" class="btn-dark mx-1"><b-icon icon="arrow-down"></b-icon></b-btn>
        <b-btn @click="right" class="btn-dark"><b-icon icon="arrow-right"></b-icon></b-btn>
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
  data() {
    return {
      field: {
        columns: 3,
        rows: 3,
        heart: '',
      },
      columnMap: [{ 1: 'a' }, { 2: 'b' }, { 3: 'c' }, { 4: 'd' }, { 5: 'e' }],
    }
  },
  computed: {
    fields() {
      const fields = []
      let rows = 1
      while (rows <= this.field.rows) {
        let columns = 1
        while (columns <= this.field.columns) {
          const element = this.columnMap.find((element) => element[columns])
          fields.push({
            row: rows,
            column: element[columns],
          })
          columns++
        }
        rows++
      }
      return fields
    },
  },
  methods: {
    up() {
      this.field.heart = 'b3'
    },
    down() {
      this.field.heart = ''
    },
    left() {
      this.field.heart = 'a3'
    },
    right() {
      this.field.heart = 'c3'
    },
  },
}
</script>
