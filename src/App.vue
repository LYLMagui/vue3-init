<template>
  <div class="app">
    <h1>Hello World!</h1>
    <button @click="showLog">打印person组件</button>
    <person ref="ren" />
  </div>
</template>

<script lang="ts" setup="App">
import person from "./components/person.vue";
import {ref} from "vue"

let ren = ref()

function showLog() {
  console.log(ren.value)
}

</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
