<template>
	<div class="count">
		<h2>当前求和为：{{sum}}</h2>
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
import { storeToRefs } from 'pinia';

// 在countStore中的ref对象可以直接使用不需要添加.value
const countStore = useCountStore()

// 使用storeToRefs来实现响应式结构赋值，使用toRefs也可以实现，但是toRefs会输出store中的所有值和方法，会影响性能
const { sum } = storeToRefs(countStore)


let n = ref(0);

function add() {
	// 第一种修改方式
	countStore.sum += n.value;

	// 第二种修改方式：批量修改
	// countStore.$patch({
	// 	sum: 123
	// })

	// 第三种修改方式
		countStore.incremnet(n.value)
	
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