<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>toy：{{ toy }}</h4>
		<h4>book：{{ book }}</h4>
		<h4 v-if="y > 0">获得{{ y }}套房</h4>
		<button @click="getHouse($parent)">获得{{ x }} 房</button>
	</div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue';

const toy = ref('奥特曼')
const book = ref(3)
const x = ref(1)
const y = ref(0);

function getHouse(parent: any) {
	if (parent.house <= 1) {
		alert('给老父亲留一套吧！')
		return
	}
	parent.house--
	y.value ++

}

defineExpose({toy,book})
</script>

<style scoped>
.child1 {
	margin-top: 20px;
	background-color: skyblue;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
}
</style>
