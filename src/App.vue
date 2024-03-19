<template>
  <div class="app">
    <person ref="ren" />
  </div>
</template>

<script lang="ts" setup="App">
import person from "./components/person.vue";
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
