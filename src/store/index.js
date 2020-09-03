import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ["Clean Bathroom", "Make Breakfast"],
    singleTodo: null,
    alert: null
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    },
    DELETE_TODO: (state, payload) => {
      state.todos.splice(payload, 1);
    },
    POPULATE_TODO: (state, payload) => {
      state.singleTodo = payload;
    },
    UPDATE_TODO: (state, payload) => {
      state.todos[payload.id] = payload.todo;
      state.singleTodo = null;
    },
    SET_ALERT: (state, payload) => {
      switch (payload.alertType) {
        case "update": {
          state.alert = "SUCCESSFULLY UPDATED";
          break;
        }
        case "delete": {
          state.alert = "SUCCESSFULLY DELETED";
          break;
        }
        case "add": {
          state.alert = "SUCCESSFULLY ADDED";
          break;
        }
        case "edit": {
          state.alert = "YOU CANNOT UPDATE WITH SPACE";
          break;
        }
        default:
          return;
      }
      const timeout = setTimeout(() => {
        state.alert = null;
        clearTimeout(timeout);
      }, 5000);
    }
  },
  actions: {
    addTodo: (context, payload) => {
      if (!payload) {
        return;
      } else {
        context.commit("ADD_TODO", payload);
        context.commit("SET_ALERT", { alertType: "add" });
      }
    },
    deleteTodo: (context, payload) => {
      context.commit("DELETE_TODO", payload);
      context.commit("SET_ALERT", { alertType: "delete" });
    },
    populateTodo: (context, payload) => {
      context.commit("POPULATE_TODO", payload);
    },
    updateTodo: (context, payload) => {
      if (!payload.todo) {
        context.commit("SET_ALERT", { alertType: "edit" });
      } else {
        context.commit("UPDATE_TODO", payload);
        context.commit("SET_ALERT", { alertType: "update" });
      }
    },
    setAlert: (context, payload) => {
      context.commit("SET_ALERT", payload);
    }
  },
  getters: {
    getTodos: state => {
      return state.todos;
    },
    getSingleTodo: state => {
      return state.singleTodo;
    }
  }
});
