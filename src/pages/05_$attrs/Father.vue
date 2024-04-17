<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<Child :a="a" :b="b" :c="c" :d="d" :update="update"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue'

function update(value:number) {
	a.value += value
}



const a = ref(1);
const b = ref(1);
const c = ref(1);
const d = ref(1);
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>
