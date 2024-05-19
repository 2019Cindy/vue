<template>
  <div class="school">
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="sendSchoolName">将学校名字传给app</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "武汉",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<!-- scoped：局部 -->
<style scoped>
.school {
  background-color: pink;
  padding-bottom: 5px;
}
</style>