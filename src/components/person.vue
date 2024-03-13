<template>
  <div class="person">
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref } from "vue";

// 需要响应式的数据才使用ref()
let name = ref("张三");
let age = ref(18);
let tel = 1388888888;

function changeName() {
  name.value = "zhang-san";
}
function changeAge() {
  age.value += 1;
}
function showTel() {
  alert(tel);
}
</script>