<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>美元：{{ money }}万</h4>
    <h4>车子：价值{{ car.brand }}万美元的{{ car.price }}</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'; 
import { ref, reactive, provide } from 'vue';

const money = ref(100);
const car = reactive({
  brand: "小米",
  price: 32
})

function getMoney(value:number) {
  money.value -= value
}

// 向所有的后代提供数据
provide('moneyContext', {money,getMoney})
provide('car', car)


</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>