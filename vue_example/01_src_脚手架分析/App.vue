<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  template: `<App></App>`,
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>
