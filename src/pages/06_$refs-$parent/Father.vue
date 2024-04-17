<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产:{{ house }}</h4>
		<button @click="addBook($refs)">给孩子们买{{ count }}本书</button>
		<Child1 ref="maxSon"/>
		<Child2 ref="minSon"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';

const house = ref(4);
const count = ref(1);

function addBook(refs:any) {
	for (let key in refs) {
		refs[key].book += count.value
		
	}
	
}


defineExpose({house})
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
