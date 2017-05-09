import Vue from 'vue'
import App from './App.vue'

Vue.filter('countLatter',function (value) {
   var word = value.split('');
   return word.length;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
