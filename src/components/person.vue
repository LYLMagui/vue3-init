<template>
  <div class="person">
    <h2>水位达到60或水温达到80度则通知服务器</h2>
    <h2>当前水位：{{ hight }}cm</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <button @click="addHight">增加水位</button>
    <button @click="addTemp">增加水温</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref,reactive,watchEffect } from "vue"

//数据
let temp = ref(0)
let hight = ref(0)

//方法
function addHight(){
  hight.value += 10
}
function addTemp(){
  temp.value += 10
}

watchEffect(() => {
  if (temp.value >= 80 || hight.value >= 60) {
    console.log("给服务器发送请求")
  }
})

</script>