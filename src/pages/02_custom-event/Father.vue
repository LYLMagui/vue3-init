<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>儿子给的玩具：{{ toy }}</h4>
		<Child @send-toy="getToy"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue';

// 数据
const toy = ref("");

// 方法
function getToy(value:string) {
	toy.value = value;
}


</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-right: 5px;
}
</style>