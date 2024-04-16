<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>借来的手机：{{ phone }}</h4>
		<button @click="emitter.emit('send-computer',computer)">借出电脑</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue'
import emitter from '../../utils/emitter';


// 数据
const computer = ref('华硕');
const phone = ref('')

emitter.on('send-phone', (value:any) => {
	phone.value = value;
})

</script>

<style scoped>
.child2 {
	margin-top: 50px;
	background-color: orange;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>