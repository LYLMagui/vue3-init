<template>
  <div class="grand-child">
    <h4>美元：{{ money }}万</h4>
    <h4>车子：价值{{ car.brand }}万美元的{{ car.price }}</h4>
    <button @click="getMoney(5)">花了爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue'
// 这里需要给默认值，不然会报错
let { money, getMoney } = inject("moneyContext",{money:0,getMoney:(x:number) => {x}})

let car = inject("car", { brand: "华为", price: 80 })




</script>

<style scoped>
.grand-child {
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>