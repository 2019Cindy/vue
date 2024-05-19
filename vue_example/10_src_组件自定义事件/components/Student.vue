<template>
  <div class="student">
    <h1>学生姓名：{{ name }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <button @click="sendStudnetName">把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendStudnetName() {
      // 触发student实例对象身上的atguigu事件
      this.$emit("atguigu", this.name, 666, 888);
      this.$emit("demo");
    },
    unbind() {
      console.log("事件解绑....");
      this.$off("atguigu"); // 解绑一个自定义事件
      //   this.$off(["atguigu", "demo"]); // 解绑多个自定义事件
      //   this.$off(); // 解绑所有的自定义事件
    },
  },
};
</script>

<style>
.student {
  background-color: yellow;
  padding-bottom: 5px;
  margin-top: 20px;
}
</style>