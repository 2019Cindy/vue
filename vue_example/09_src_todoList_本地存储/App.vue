<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加todo对象
    addTodo(todoObj) {
      console.log("xxx", todoObj);
      this.todos.unshift(todoObj);
    },
    // 勾选、勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选
    checkAllTodo(checked) {
      this.todos.forEach((todo) => {
        todo.done = checked;
      });
    },
    clearAllTodo() {
      console.log("clearAll.......");
      this.todos = this.todos.filter((todo) => {
        return todo.done != true;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
/*base*/
.app {
  background-color: grey;
}
</style>
