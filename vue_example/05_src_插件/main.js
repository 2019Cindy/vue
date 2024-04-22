// import Vue from 'vue/dist/vue'
import Vue from "vue"; // 残缺版的vue

// 引入App组件，它是所有组件的父组件
import App from "./App.vue";

// 引入插件
import plugins from "./plugins";
Vue.config.productionTip = false;

// 使用插件
Vue.use(plugins, 1, 2, 3);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
