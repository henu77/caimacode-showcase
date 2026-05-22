<template>
  <div class="app-shell">
    <Transition name="fade" mode="out-in">
      <RouterView :key="$route.fullPath" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useDarkMode } from './composables/useDarkMode'

const route = useRoute()

useDarkMode()
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
