// import Vue from 'vue/dist/vue'
import Vue from "vue"; // 残缺版的vue

// 引入App组件，它是所有组件的父组件
import App from "./App.vue";
import { hunhe, hunhe2 } from "./mixin";
Vue.config.productionTip = false;

// 全局混合
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
