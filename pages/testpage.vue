<template>
  <div class="container pt-4 d-flex flex-column">
    <h3
      v-anime="{
        rotate: 360,
        backgroundColor: ['#2f495e', '#00c58e'],
        duration: 3000,
        loop: true,
      }"
    >
      Кубики
    </h3>
    <div>Dice 1: {{ dice1 }}</div>
    <div>Dice 2: {{ dice2 }}</div>
    <div>----</div>
    <div>Sum {{ diceSum }}</div>
    <div class="text-center">
      <b-btn @click="roll()">Roll Dices</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testpage',
  data() {
    return {
      dice1: 0,
      dice2: 0,
    }
  },
  computed: {
    diceSum() {
      return this.dice1 + this.dice2
    },
  },
  methods: {
    roll() {
      this.dice1 = this.rollDice()
      this.dice2 = this.rollDice()
    },
    rollDice() {
      let rand = Math.floor(Math.random() * 6) + 1
      return Math.round(rand)
    },
  },
}
</script>
