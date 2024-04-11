<template>
	<div class="count">
		<h2>当前求和为：{{countStore.sum}}</h2>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="add">+</button>
		<button @click="minus">-</button>
	</div>
</template>
<script lang="ts" setup name="Count">
import { ref } from 'vue';
import { useCountStore } from '../store/count';

// 在countStore中的ref对象可以直接使用不需要添加.value
const countStore = useCountStore()

let n = ref(0);

function add(){
	countStore.sum += n.value;
	// sum.value += n.value;
}
function minus() {
	countStore.sum -= n.value;
	// sum.value -= n.value;
}

</script>
<style scoped>

.count{
	width: 800px;
	height: 180px;
	background-color: #62b6e4;
	border-radius: 10px;
	box-shadow: 1px 1px 20px;
}

h2{
	text-align: left;
}
select{
	margin: 10px 10px;
	width: 50px;
}
button{
	margin: 10px 10px;
}

</style>