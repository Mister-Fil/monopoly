<template>
  <div class="container pt-3 d-flex flex-column text-center">
    <div>
      <b-alert show>Бросок Кубиков</b-alert>
    </div>
    <div>Dice 1: {{ dice1 }}</div>
    <div>Dice 2: {{ dice2 }}</div>
    <div></div>
    <div>Sum {{ diceSumm }}</div>
    <div class="text-center">
      <b-button pill variant="outline-danger" @click="roll()"
        >Lets Roll!</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'nullpage',
  data() {
    return {
      dice1: 0,
      dice2: 0,
    }
  },
  computed: {
    diceSumm() {
      return this.dice1 + this.dice2
    },
  },
  methods: {
    rollDice() {
      let rand = Math.floor(Math.random() * 6) + 1
      return Math.round(rand)
    },
    roll() {
      this.dice1 = this.rollDice()
      this.dice2 = this.rollDice()
    },
  },
}
</script>

<style scoped></style>
