<template>
  <div class="justify-content-center vh-200 vw-100 text-center align-self-center">
    <div>Угадайте число</div>
    <div><b-button pill variant="outline-secondary" @click="newNum()"> Загадать число </b-button></div>
    <div>
      <div>
        <b-button pill variant="outline-info" @click="checkGuess(1)"> 1 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(2)"> 2 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(3)"> 3 </b-button>
      </div>
      <div>
        <b-button pill variant="outline-info" @click="checkGuess(4)"> 4 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(5)"> 5 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(6)"> 6 </b-button>
      </div>
      <div>
        <b-button pill variant="outline-info" @click="checkGuess(7)"> 7 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(8)"> 8 </b-button>
        <b-button pill variant="outline-info" @click="checkGuess(10)"> 9 </b-button>
      </div>
      <div>
        <b-button pill variant="outline-info" @click="checkGuess(10)"> 10 </b-button>
      </div>
      <div><b-button pill variant="outline-danger" @click="reset()"> Сброс </b-button></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'guess',
  data() {
    return {
      num: 0,
      turns: 0,
    }
  },
  methods: {
    reset() {
      this.turns = 0
      this.newNum()
    },
    newNum() {
      this.num = Math.floor(Math.random() * 10) + 1
    },
    checkGuess(guess) {
      try {
        guess = Math.floor(guess)
      } catch (e) {
        alert('Угадайте число!')
        this.turns++
        return false
      }
      if (guess === this.num) {
        alert('Вы угадали число! Это заняло ' + this.turns + ' хода(ов)')
        return true
      } else if (guess > this.num) {
        alert('Число больше загаданного! Попробуйте снова')
        this.turns++
        return false
      } else {
        alert('Число меньше загаданного! Попробуйте снова')
        this.turns++
        return false
      }
    },
  },
}
</script>
<style scoped></style>
