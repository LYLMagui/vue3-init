<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model等效于下面的写法 -->
    <AtguiguInput v-model:username="username" v-model:password="password" />


    <!-- <AtguiguInput 
    :modelValue="username"
    @update:model-value="username = $event"/> -->



  </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from 'vue'
import AtguiguInput from './AtguiguInput.vue';

const username = ref('123');
const password = ref('456');
	
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
