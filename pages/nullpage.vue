<template>
  <div class="d-flex justify-content-center vh-100 vw-100 text-center">
    <div class="align-self-center">
      <h3
        v-anime="{
          rotate: -360,
          backgroundColor: ['#ea021a', '#ffffff'],
          duration: 4500,
          loop: false,
        }"
        style="width: 250px"
      >
        Бросок кубиков
      </h3>
      <div></div>
      <div>Dice 1: {{ dice1 }}</div>
      <div>Dice 2: {{ dice2 }}</div>
      <div></div>
      <div>Sum {{ diceSumm }}</div>
      <div class="text-center">
        <b-button pill variant="outline-danger" @click="roll()">Lets Roll! </b-button>
      </div>
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
