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
    <div v-if="getSingleTodo">
      <h1 class="update-title">Update Todo</h1>

      <form class="form-group" @submit.prevent="submitForm">
        <textarea type="text" :value="singleTodo.todo" @input="get_todo" />
        <button>Update</button>
      </form>
      <button @click="clear" class="back-btn">Back</button>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    Todo
  },
  computed: {
    ...mapGetters(["getTodos", "getSingleTodo"]),
    ...mapState(["singleTodo"])
  },
  methods: {
    ...mapActions(["updateTodo", "clearTodo"]),
    submitForm() {
      this.updateTodo({
        id: this.getSingleTodo.id,
        todo: this.singleTodo.todo
      });
      this.inputText = null;
    },
    get_todo(event) {
      this.singleTodo.todo = event.target.value;
    },
    clear() {
      this.clearTodo();
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
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  margin-top: 2em;
  text-transform: uppercase;
  transition: all 250ms ease;
}

.form-group button:hover {
  background: rgba(0, 0, 0, 0.5);
  color: #f4f4f4;
}

.todo-list {
  padding: 4em 10em;
}

.update-title {
  text-align: center;
  margin-top: 4em;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  width: 20%;
  margin: 4em auto 0em;
}

.back-btn {
  padding: 0.5em 1em;
  text-transform: uppercase;
  color: gray;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 0 auto;
  display: grid;
  place-items: center;
}
</style>
