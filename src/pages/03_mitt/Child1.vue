<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>手机：{{ phone }}</h4>
		<h4>借来的电脑：{{ computer }}</h4>
		<button @click="emitter.emit('send-phone',phone)">借出手机</button>

	</div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'
import emitter from '../../utils/emitter';

//数据
const phone = ref('小米');
const computer = ref('')

emitter.on('send-computer', (value:any) => {
	computer.value = value
})







</script>

<style scoped>
.child1 {
	margin-top: 50px;
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}

.child1 button {
	margin-right: 10px;
}
</style>