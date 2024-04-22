// import Vue from 'vue/dist/vue'
import Vue from 'vue' // 残缺版的vue

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

/**
 * 小结：
 * 关于不同版本的vue
 * 1.vue.js与vue.runtime.xxx.js的区别：
 *    （1）vue.js是完整版的vue，包含：核心功能+模板解析器
 *    （2）vue.runtime.xxx.js是运行版的vue，只包含核心功能，没有模板解析器
 * 2.因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用
 *    render函数接收到的createElement函数指定具体的内容
 */
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



