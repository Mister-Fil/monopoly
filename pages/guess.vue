<template>
  <div class="align-self-center">
    <h3 class="pb-4">Угадайте число</h3>

    <div class="d-flex justify-content-around pb-4">
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(1)"> 1</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(2)"> 2</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(3)"> 3</b-button>
      </div>
    </div>

    <div class="d-flex justify-content-around pb-4">
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(4)"> 4</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(5)"> 5</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(6)"> 6</b-button>
      </div>
    </div>

    <div class="d-flex justify-content-around pb-4">
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(7)"> 7</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(8)"> 8</b-button>
      </div>
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(10)"> 9</b-button>
      </div>
    </div>

    <div class="d-flex justify-content-around pb-4">
      <div>
        <b-button class="btn-lg" pill variant="outline-info" @click="checkGuess(10)"> 10</b-button>
      </div>
    </div>

    <div class="d-flex justify-content-around pb-4">
      <div>
        <b-button pill variant="outline-danger" @click="reset()"> Сброс</b-button>
      </div>
      <div>
        <b-button pill variant="outline-secondary" @click="newNum('Число обновлено')"> Загадать число</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guess',
  layout: 'game',
  data() {
    return {
      num: 0,
      turns: 0,
      toastCount: 0,
    }
  },
  methods: {
    makeToast(message, variant = 'success') {
      this.$bvToast.toast(message, {
        title: 'Результат',
        variant: variant,
        autoHideDelay: 1000,
      })
    },
    reset() {
      this.turns = 1
      this.newNum()
    },
    newNum(message) {
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
        this.makeToast('Вы угадали! Это заняло ' + this.turns + ' хода(ов)', 'success')
        return true
      } else if (guess > this.num) {
        this.makeToast('Число больше загаданного! Попробуйте снова', 'danger')
        this.turns++
        return false
      } else {
        this.makeToast('Число меньше загаданного! Попробуйте снова', 'danger')
        this.turns++
        return false
      }
    },
  },
}
</script>
