<template>
  <div
    class="todo"
    v-if="!getSingleTodo"
    @click="done"
    :class="{ done: isDone }"
  >
    <h3>{{ todo }}</h3>
    <div>
      <button class="delete-btn" @click="deleteStuff">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
      <button class="update-btn" @click="populateSingleTodo">
        <font-awesome-icon :icon="['fas', 'edit']" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isDone: false
    };
  },
  props: ["todo", "id"],
  computed: {
    ...mapGetters(["getSingleTodo"])
  },
  methods: {
    ...mapActions(["deleteTodo", "populateTodo"]),
    deleteStuff() {
      this.deleteTodo(this.id);
    },
    populateSingleTodo() {
      this.populateTodo({ todo: this.todo, id: this.id });
    },
    done() {
      this.isDone = !this.isDone;
    }
  }
};
</script>

<style scoped>
.todo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2em 2em;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-bottom: 10px;
  color: #f4f3f5;
  transition: 150ms ease;
}

.todo:hover {
  transform: scale(1.1);
}

button {
  border: none;
  width: 30px;
  height: 30px;

  margin: 0em 0.5em;
  cursor: pointer;
  border-radius: 50%;
  transition: all 150ms ease;
  outline: none;
}

button:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.7);
}

.todo:nth-child(4n + 1) {
  background-color: #d6c0ec;
}

.todo:nth-child(4n + 2) {
  background-color: #cdafeb;
}
.todo:nth-child(4n + 3) {
  background-color: #c39bea;
}
.todo:nth-child(4n + 4) {
  background-color: #b989e9;
}

.todo.done h3 {
  text-decoration: line-through;
}

.todo.done {
  opacity: 0.3;
}
</style>
