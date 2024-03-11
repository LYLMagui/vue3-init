<template>
  <div class="app">
    <h1>Hello World!</h1>
    <person />
  </div>
</template>

<script lang="ts">
import person from "./components/person.vue";
export default {
  name: "App",
  components: { person }, //注册组件
};
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
