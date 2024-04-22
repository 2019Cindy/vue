<template>
  <div id="app">
    <!-- 加上：之后，引号里面是js表达式 18 -->
    <Student name="张三" sex="男" :age="18" />
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style>
</style>
