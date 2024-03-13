<template>
  <div class="game">
    <h2>游戏列表：</h2>
    <ul>
      <li v-for='g in games' :key='g.id'>{{ g.name }}</li>
    </ul>
    <button @click="changeGameName">改变游戏名</button>
  </div>
</template>

<script lang="ts" setup name="game">
import { reactive } from 'vue';

// 使用reactive()创建响应式对象
let games = reactive([
  { id: "g1", name: "战地5" },
  { id: "g2", name: "梦幻西游" },
  { id: "g3", name: "原神" },
])

function changeGameName() {
  games[0].name = "我被笨蛋美女包围了！"
}


</script>