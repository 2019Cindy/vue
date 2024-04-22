<template>
    <div>
        <h2>学校名称：{{ name | slice }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
        return {
            name: '尚硅谷atguigu',
            address: '北京',
        }
    },
}
</script>