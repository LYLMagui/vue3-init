<template>
  <div class="father">
    <h3>父组件</h3>
    <Category>
      <ul>
        <li v-for="(name,index) in games" :key="index">{{ name.gname }}</li>
      </ul>
    </Category>
  </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from 'vue';
import Category from './Category.vue';


const games = reactive([{
  gname: '原神'
}, {
  gname:'碧蓝幻想'
  }, {
  gname:'魔兽世界'
  }])



</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>