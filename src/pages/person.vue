<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <button @click="getDog">再来一直小狗</button>
  </div>
</template>

<script lang="ts" setup name="person">
// 引入hooks
import useSum from '../hooks/useSum';
import useDog from '../hooks/useDog';
import { useRouter } from 'vue-router';

// 解构对象
const { dogList, getDog } = useDog()
const { sum, add } = useSum()

const router = useRouter()

// 自动路由跳转
setTimeout(() => {
  router.push('/news')
}, 3000);

</script>
<style scoped>
img {
  height: 100px;
  margin-right: 10px;
}
</style>