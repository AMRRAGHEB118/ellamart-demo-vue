<script lang="ts">
import AppLayout from './components/global/AppLayout.vue'
export default {
  components: {
    AppLayout
  }
}
</script>

<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
