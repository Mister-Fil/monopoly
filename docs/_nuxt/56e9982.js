(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(t,n,e){"use strict";e.r(n);var c={name:"guess",layout:"game",data:function(){return{num:0,turns:0,toastCount:0,guess:Math.floor()}},computed:{isGameOver:function(){return this.guess===this.num}},methods:{makeToast:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$bvToast.toast(t,{title:"Результат",variant:n,autoHideDelay:1e3})},reset:function(){this.turns=1,this.newNum(),this.makeToast("Число обновлено","warning")},newNum:function(){this.num=Math.floor(10*Math.random())+1},checkGuess:function(t){try{this.guess=Math.floor(t)}catch(t){return alert("Угадайте число!"),this.turns++,!1}return this.guess===this.num?(this.makeToast("Вы угадали! Это заняло "+this.turns+" хода(ов)","success"),!0):this.guess>this.num?(this.makeToast("Число больше загаданного! Попробуйте снова","danger"),this.turns++,!1):(this.makeToast("Число меньше загаданного! Попробуйте снова","danger"),this.turns++,!1)}}},o=e(45),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"align-self-center"},[e("h3",{staticClass:"pb-4"},[t._v("Угадайте число")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around pb-4"},[e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(1)}}},[t._v(" 1")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(2)}}},[t._v(" 2")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(3)}}},[t._v(" 3")])],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around pb-4"},[e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(4)}}},[t._v(" 4")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(5)}}},[t._v(" 5")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(6)}}},[t._v(" 6")])],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around pb-4"},[e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(7)}}},[t._v(" 7")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(8)}}},[t._v(" 8")])],1),t._v(" "),e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(10)}}},[t._v(" 9")])],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around pb-4"},[e("div",[e("b-button",{staticClass:"btn-lg",attrs:{pill:"",variant:"outline-info"},on:{click:function(n){return t.checkGuess(10)}}},[t._v(" 10")])],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-content-around pb-4"},[e("div",[e("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:function(n){return t.reset()}}},[t._v("Загадать число")])],1),t._v(" "),t.isGameOver?e("div",[e("b-button",{attrs:{pill:"",variant:"success"},on:{click:function(n){return t.reset()}}},[t._v("Новая игра")])],1):t._e()])])}),[],!1,null,null,null);n.default=component.exports}}]);