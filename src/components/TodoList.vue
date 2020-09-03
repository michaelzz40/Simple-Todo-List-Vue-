<template>
  <div>
    <div class="todo-list" v-if="!getSingleTodo">
      <Todo
        v-for="(todo, index) in getTodos"
        :key="index"
        :todo="todo"
        :id="index"
      />
    </div>

    <form v-if="getSingleTodo" class="form-group" @submit.prevent="submitForm">
      <textarea type="text" :value="getSingleTodo.todo" @input="get_todo" />
      <button>Update</button>
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
  text-align: center;
}

.form-group textarea {
  height: 10em;
  padding: 2em 1em;
  width: 50%;
  margin: 1em auto;
  outline: none;
  border: none;
  display: block;
  transition: all 150ms ease;
  border-radius: 4px;
  border-bottom: 1px solid black;
}

.form-group textarea:focus {
  background-color: rgba(0, 0, 0, 0.05);
}

.form-group button {
  display: inline-block;
}

.todo-list {
  padding: 4em 10em;
}
</style>
