<template>
  <div class="app">
    <h2>{{ msg }}，学生姓名：{{ studentName }}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (方式一)-->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (方式二：使用ref)-->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "hello world",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("app收到学校名：", name);
    },
    getStudentName(name, ...params) {
      console.log("被调用了...", name, params);
      this.studentName = name;
    },
    demo() {
      console.log("demo被调用....");
    },
    show() {
      alert("1234");
    },
  },
  mounted() {
    // 绑定自定义事件
    this.$refs.student.$on("atguigu", this.getStudentName);
    this.$refs.student.$on("demo", this.demo);
    // this.$refs.student.$once("atguigu", this.getStudentName);

    // 延迟3秒
    // setTimeout(() => {
    //   this.$refs.student.$on("atguigu", this.getStudentName);
    // }, 3000);
  },
};
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}
.app {
  background-color: grey;
}
</style>
