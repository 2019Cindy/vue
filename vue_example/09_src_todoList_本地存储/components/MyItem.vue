<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)" />
      <!-- 下面代码也能实现功能，但是不建议用此种方式，因为不能修改props属性（vue是浅层次的监视，可以修改对象的属性，不能修改对象，因此此处可以实现） -->
      <!-- <input type="checkbox" v-model="item.done" /> -->

      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["item", 'checkTodo', 'deleteTodo'], // props不能修改，监视的是对象，（是浅层次的监视，可以修改对象的属性）
  methods: {
    handleCheck(id) {
      // console.log('id....', id)
      // App 组件将对应Obj的id取反
      this.checkTodo(id)
    },
    handleDelete(id) {
      console.log('handleDelete....', id)
      if (confirm('确认删除吗？')) {
        this.deleteTodo(id)
      }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>