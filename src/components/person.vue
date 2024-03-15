<template>
  <div class="person">
    <h1>情况一：监视ref定义的基本类型数据：直接写数据名即可，监视的是其`value`值的改变。</h1>
    <h2>求和：{{ sum }}</h2>
    <button @click="changeSum">点我加1</button><br>
    <h3>旧的sum值：{{ oldVal }}，新的sum值：{{ newVal }}</h3>
    <h3>{{ tips }}</h3>
    
  </div>
</template>

<script lang="ts" setup name="person">
import {ref,watch} from 'vue'

/** @@数据@@ */
let sum = ref(0);
let tips = ref("")
let newVal = ref(0)
let oldVal = ref(0)

/** @@方法@@*/
function changeSum() {
  sum.value += 1
}

// 情况一：监视ref定义的基本类型数据：直接写数据名即可，监视的是其`value`值的改变。
// watch()的返回值是一个函数，是用于停止监视
const stopWatch = watch(sum, (newValue,oldValue) => {
  console.log("值变化了：",newValue,oldValue)
  newVal.value = newValue
  oldVal.value = oldValue
  if (newValue >= 10) {
    stopWatch()
    tips.value = "停止监视"
  }
}) 


</script>