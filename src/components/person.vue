<template>
  <div class="person">
    
  </div>
</template>

<script lang="ts" setup name="person">
import { ref, defineExpose } from "vue"
import {type PersonInter,type Persons} from "../types"

let person:PersonInter = {id:"asdfg",name:"张三",age:18}
let persons: Persons = [
  { id: "asdfa", name: "张三", age: 18 },
  { id: "asdfb", name: "李四", age: 18 },
  { id: "asdfc", name: "王五", age: 18 }
]
</script>