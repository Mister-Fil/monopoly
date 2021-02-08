<template>
  <div class="d-flex justify-content-center vh-100 vw-100">
    <div class="align-self-center">
      <h3 style="width: 200px">Кубики</h3>
      <div>Dice 1: {{ dice1 }}</div>
      <div>Dice 2: {{ dice2 }}</div>
      <div>----</div>
      <div>Sum {{ diceSum }}</div>
      <div class="text-center">
        <b-btn @click="roll()">Roll Dices</b-btn>
        <b-btn @click="helloWorld()">helloWorld</b-btn>
      </div>
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
  mounted() {
    this.helloWorld()
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
    helloWorld() {
      const anime = this.$anime

      anime({
        targets: '.element',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800,
      })
    },
  },
}
</script>
