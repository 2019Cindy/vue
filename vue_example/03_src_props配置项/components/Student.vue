<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学生年龄：{{ modifyAge }}</h1>
    <button @click="modify">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个学生",
      modifyAge: this.age,
      // name: "张三",
      // sex: "男",
      // age: 18,
    };
  },
  methods: {
    modify() {
      // this.age += 1;
      this.modifyAge += 1;
    },
  },
  // 简单接收
  // props: ["name", "sex", "age"],

  // 接收的同时进行类型限制
  props: {
    name: String,
    sex: String,
    age: Number,
  },

  // 接收的同时进行类型限制+默认值的只当+必要性限制
  // props: {
  //   name: {
  //     type: String, // 类型
  //     required: true, // name是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default: 99, // 默认值是99
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style>
</style>