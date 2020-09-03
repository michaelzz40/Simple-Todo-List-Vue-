<template>
  <div>
    <Navbar />
    <div class="container">
      <TodoForm></TodoForm>
      <Alert />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList,
    Navbar,
    Alert
  }
};
</script>

<style>
.container {
  width: 85%;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
</style>
