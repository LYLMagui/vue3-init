<template>
  <div class="game">
    <slot name="ul" :games="games"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from 'vue'

const games = reactive([
  {id:"qwer01",name:"原神"},
  {id:"qwer02",name:"王者荣耀"},
  {id:"qwer03",name:"永劫无间"}
])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>