<template>
  <div>Угадай число</div>
  <div>Введите число</div>
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
      this.num = parseInt(Math.random() * 10) + 1
    },
    checkGuess(guess) {
      try {
        guess = parseInt(guess)
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
