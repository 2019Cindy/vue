<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h1>学校名称：{{ schoolName }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="schoolInfo">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "School",
  // el: '.root', // 组件定义时不要写el，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
  data() {
    return {
      schoolName: "尚硅谷",
      address: "武汉",
    };
  },
  methods: {
    schoolInfo() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件样式 */
.demo {
  background-color: yellow;
}
</style>
