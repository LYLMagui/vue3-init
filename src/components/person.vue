<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一辆车</button>
    <button @click="changeC2">修改第二辆车</button>
    <button @click="changeCar">修改车</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive, watch } from 'vue'

//数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "迈巴赫",
    c2: "路虎"
  }
})

//方法

function changeName() {
  person.name += "~"
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = "雅迪"
}
function changeC2() {
  person.car.c2 = "爱玛"
}
function changeCar() {
  person.car = {
    c1: "小牛",
    c2: "九号"
  }
}


//情况五：监视上述所有情况
watch([() => person.name, () => person.car.c1], (newValue,OldValue) => {
  console.log("数据改变了",newValue,OldValue)
})

</script>