<template>
  <div class="person">
    <ul>
      <!-- 如果不使用唯一标识的话，要用默认的索引，写法如下 -->
      <!-- <li v-for="(p,index) in list" :key="index">{{ p.name }} -- {{ p.age }}</li> -->
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="person">
import { Persons } from '../types';

// @@值接收类型@@
// 接收父组件传的值，同时把props保存起来
let x = defineProps(["list"])

// @@接收list + 限制类型@@
defineProps<{ list: Persons }>()

// @@接收list + 限制类型 + 限制必要性 + 指定默认类型@@
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: "asdfg0", name:"赵一",age:10}]
})


</script>