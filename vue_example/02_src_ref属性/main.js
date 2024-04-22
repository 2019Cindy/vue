// import Vue from 'vue/dist/vue'
import Vue from 'vue' // 残缺版的vue

// 引入App组件，它是所有组件的父组件
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')





