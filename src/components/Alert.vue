<template>
  <transition name="fade">
    <div class="alert" v-if="alert">{{ alert }}</div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["alert"])
  }
};
</script>

<style scoped>
.alert {
  text-align: center;
  padding: 2em 4em;
}

.fade-enter-active {
  animation: fadeIn 250ms ease;
}

.fade-leave-active {
  animation: fadeOut 250ms ease;
}

@keyframes fadeIn {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>
