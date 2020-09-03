<template>
  <div>
    <div class="todo-list">
      <Todo
        v-for="(todo, index) in getTodos"
        :key="index"
        :todo="todo"
        :id="index"
      />
    </div>

    <form v-if="getSingleTodo" class="form-group" @submit.prevent="submitForm">
      <input type="text" :value="getSingleTodo.todo" @input="get_todo" />
    </form>
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      inputText: ""
    };
  },
  components: {
    Todo
  },
  computed: {
    ...mapGetters(["getTodos", "getSingleTodo"])
  },
  methods: {
    ...mapActions(["updateTodo"]),
    submitForm() {
      this.updateTodo({
        id: this.getSingleTodo.id,
        todo: this.inputText
      });
    },
    get_todo(event) {
      this.inputText = event.target.value;
    }
  }
};
</script>

<style scoped>
.form-group {
  margin: 3em;
}

.todo-list {
  padding: 4em 10em;
}
</style>
