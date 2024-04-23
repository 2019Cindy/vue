<template>
    <div class="demo">
        <h1>学校名字：{{ name }}</h1>
        <h1>学校地址：{{ address }}</h1>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '武汉'
        }
    }
}
</script>

<!-- scoped：局部 -->
<style scoped>
.demo {
    background-color: pink;
}
</style>