<template>
  <div id="app">
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from "./components/School";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style></style>
