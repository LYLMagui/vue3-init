<template>
  <div class="person">
    <h1 ref="title1">星谷</h1>
    <h2>长空</h2>
    <button @click="showLog">点击获取h1</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref,defineExpose} from "vue"
// 数据
let title1 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

// 方法
function showLog() {
  console.log(title1.value)
}

// 将组件定义的变量暴露出去，使父组件可以获取
defineExpose({a,b,c})

</script>