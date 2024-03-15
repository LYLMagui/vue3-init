<template>
  <div class="person">
    <h1>情况二：监视ref定义的对象类型数据：直接写数据名，监视的是对象的地址值，若想要监视对象内部的数据，要手动开启深度监视。</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref, watch } from 'vue'

/** @@数据@@ */

let person = ref({
  name: "张三",
  age: 18
})

/** @@方法@@*/
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {
    name: "李四",
    age: 10
  }

  // 直接写数据名，监视的是对象的地址值，若想要监视对象内部的数据，要手动开启深度监视。
  // watch的第一个参数是：被监视的数据
  // watch的第二个参数是：监视的回调
  // watch的第三个参数是：配置对象（deep、immediate等等）
  let stopWatch = watch(person, (newValue, oldValue) => {
    console.log("person变化了", newValue, oldValue);
    //deep:true是开启深度监视,immediate是开启初始时就监视
  }, { deep: true, immediate:false })
}

</script>