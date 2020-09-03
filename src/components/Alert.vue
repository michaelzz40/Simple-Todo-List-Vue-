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
.fade-enter-active {
  animation: fadeIn 250ms ease;
}

.fade-leave-active {
  animation: fadeOut 250ms ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
