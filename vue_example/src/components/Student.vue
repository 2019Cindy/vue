<template>
    <div>
        <h1 @click="showName">学生姓名：{{ name }}</h1>
        <h1>学生性别：{{ sex }}</h1>
    </div>
</template>

<script>
// 引入局部混合
// import { hunhe, hunhe2 } from '../mixin'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男',
            x: 66
        }
    },
    // mixins: [hunhe, hunhe2],    // 局部
    mounted() {
        console.log('hhhhhh....')
    }
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // }
}
</script>

<style></style>