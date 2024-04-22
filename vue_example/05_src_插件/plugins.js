export default {
  install(Vue, a, b, c) {
    console.log("install", Vue, a, b, c);

    // 过滤器
    Vue.filter("slice", function (name) {
      return name.substring(0, 4);
    });

    // 全局指令
    Vue.directive("fbind", {
      bind(element, binding) {
        element.value = binding.value;
      },
      inserted(element) {
        element.focus();
      },
      update(element, binding) {
        element.value = binding.value;
        element.focus();
      },
    });
  },
};
