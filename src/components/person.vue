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

// 只监视对象中的一个值，因为监视只能是一个函数，ref对象，除此之外的类型都要写成getter函数形式，() => {return xxx}
watch(() => person.name, (newValue, OldValue) =>{
  console.log("值变化了",newValue,OldValue)
}) 

// 若监视的是对象中的对象，可以直接写person.car，也可以写成函数形式 () => person.car,建议写成函数形式
// 若想要监视整个对象及对象内的属性的变化，就需要开启深度监视选项
watch(() =>  person.car, (newValue,OldValue) => {
  console.log("换车啦",newValue,OldValue)
},{deep:true})

</script>