<template>
    <div class="demo">
        <h1 class="atguigu">学生姓名：{{ name }}</h1>
        <h1>学生年龄：{{ age }}</h1>
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

<!-- lang:样式语言css、less -->
<!-- <style lang="css">
.demo {
    background-color: yellow;
}
</style> -->

<style lang="less">
.demo {
    background-color: yellow;

    .atguigu {
        font-size: 40px;
    }
}
</style>