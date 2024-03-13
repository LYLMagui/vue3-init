<template>
  <div class="game">
    <h2>我买了一辆{{ car.name }},花了{{ car.price }}万</h2>
    <button @click="changeCar">没钱了</button>
    <hr>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for='g in games' :key='g.id'>{{ g.name }}</li>
    </ul>
    <button @click="changeGameName">改变游戏名</button>
  </div>
</template>

<script lang="ts" setup name="game">
import { reactive, ref } from 'vue';

//reactive定义对象
let car = reactive({
  name: "帕拉梅拉",
  price:100
})

// 使用ref创建响应式对象
let games = ref([
  { id: "g1", name: "战地5" },
  { id: "g2", name: "梦幻西游" },
  { id: "g3", name: "原神" },
])

function changeGameName() {
  games.value[0].name = "我被笨蛋美女包围了！"
}
function changeCar() {
  //使用Object.assign()将新的对象赋值给原对象，如果是ref定义的对象，可以直接赋值：car = {name:"奥迪A8",price:150}
  Object.assign(car, { name:"奥迪A8",price:150})
}
</script>