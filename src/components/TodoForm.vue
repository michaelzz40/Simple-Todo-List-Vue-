<template>
  <div class="form-group">
    <form @submit.prevent="submitForm">
      <input type="text" v-model="todo" placeholder="Enter a new Todo List" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitForm() {
      this.$store.dispatch("addTodo", this.todo);
      this.todo = "";
    }
  }
};
</script>

<style scoped>
.form-group {
  text-align: center;
  padding: 4em 8em;
}

.form-group [type="text"] {
  width: 30%;
  padding: 0.5em 0em;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
}

.form-group button {
  border: none;
  background: transparent;
  padding: 0.5em 1em;
  outline: none;
  cursor: pointer;
  margin-left: 1em;
  transition: all 150ms ease;
}

.form-group button:hover {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: #fff;
}
</style>
