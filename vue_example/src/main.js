// import Vue from 'vue/dist/vue'
import Vue from 'vue' // 残缺版的vue

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


// new Vue({
//   el: '#app',
//   template: `<App></App>`,
//   components: { App }
// })

// 残缺版的vue，不能解析template，使用render
new Vue({
  el: '#app',
  render(createElement) {
    return createElement('h1', 'hello world')
  }
})



