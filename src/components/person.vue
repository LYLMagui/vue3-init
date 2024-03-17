<template>
  <div class="person">
    <h1>情况三：监视`reactive`定义的对象型数据，且默认开启深度监视</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive, watch } from 'vue'

/** @@数据@@ */

let person = reactive({
  name: "张三",
  age: 18
})

/** @@方法@@*/
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}

// reactive定义的对象在改变时必须用Object.assign()
function changePerson() {
  Object.assign(person, {
    name: "李四",
    age: 10
  })
}

let stopWatch = watch(person, (newValue, oldValue) => {
  console.log("person变化了", newValue, oldValue);
  //deep:true是开启深度监视,immediate是开启初始时就监视
})

</script>