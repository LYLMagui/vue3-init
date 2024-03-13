<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" />
    名：<input type="text" v-model="lastName" />
    全名；<span>{{ fullName }}</span>
    <button @click="changeName">改名</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref,computed } from "vue";

// 数据 
let firstName = ref('zhang')
let lastName = ref("san")

// 这样定义的fullName变量是只读不可修改的
// let fullName = computed(() => {
//   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

// 这种方法定义的fullName才是可读可写的
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  }
})

function changeName() {
  fullName.value = "li-si"
}


</script>