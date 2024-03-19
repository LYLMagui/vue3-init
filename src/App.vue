<template>
  <div class="app">
    <person :list="personList"/>
  </div>
</template>

<script lang="ts" setup="App">
import { reactive } from "vue";
import person from "./components/person.vue";
import { Persons } from "./types"


let personList = reactive<Persons>([
  {id:"asdfg1",name:"张三",age:18},
  {id:"asdfg2",name:"李四",age:19},
  {id:"asdfg3",name:"王五",age:20,x:10},
])

</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
