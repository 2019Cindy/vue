<template>
  <div>
    <h1 ref="title">hhhhhhhhh</h1>
    <button @click="show" ref="btn">点我输出上面的dom</button>
    <School ref="sch"></School>
    <School />
    <School />
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "你好啊!",
    };
  },
  methods: {
    show() {
      console.log(this.$refs.title); // 真实的dom元素
      console.log(this.$refs.btn); // 真实的dom元素
      console.log(this.$refs.sch); // school组件的实例对象 vc
    },
  },
};
</script>

<style>
</style>
