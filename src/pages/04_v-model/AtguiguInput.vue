<template>
  <h3></h3>
  <input text="text" :value="username" @input="emit('update:username', (<HTMLInputElement>$event.target).value)" />
  <h4>用户名：{{ username }}</h4>

  <input text="text" :value="password" @input="emit('update:password', (<HTMLInputElement>$event.target).value)" />
  <h4>密码：{{ password }}</h4>
</template>

<script setup lang="ts" name="AtguiguInput">
defineProps(['username', 'password'])
const emit = defineEmits(['update:username', 'update:password']) 
</script>

<style scoped>
input {
  border: 2px solid #BAF2EE;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>