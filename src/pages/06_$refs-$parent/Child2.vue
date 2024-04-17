<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>computer:{{ computer }} </h4>
		<h4>book：{{ book }}</h4>
		<h4 v-if="y > 0">获得{{ y }}套房</h4>
		<button @click="getHouse($parent)">获得{{ x }} 房</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref } from 'vue';

const computer = ref(4);
const book = ref(5);

const x = ref(1)
const y = ref(0);

function getHouse(parent: any) {
	if (parent.house <= 1) {
		alert('给老父亲留一套吧！')
		return
	}
	parent.house--
	y.value++
}

defineExpose({ computer, book })


</script>

<style scoped>
.child2 {
	margin-top: 20px;
	background-color: orange;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
