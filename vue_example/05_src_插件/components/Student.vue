<template>
    <div>
        <h1>学生姓名：{{ name }}</h1>
        <h1>学生年龄：{{ age }}</h1>
        <input v-fbind:value="name">
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18
        }
    }
}
</script>

<style></style>