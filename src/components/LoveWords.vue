<template>
	<div class="love-words">
		<button @click="addOne">加一句</button>
		<ul>
			<li v-for="word in words" :key="word.id">{{ word.hitokoto }} -- {{ word.from }}</li>
		</ul>
	</div>

</template>

<script lang="ts" setup name="LoveWords">
import { reactive } from 'vue'
import axios from 'axios'
let words = reactive([
	{ "id": '5655', "hitokoto": "昔去雪如花，今来花似雪。", "from": "别诗" },
	{ "id": '5085', "hitokoto": "梦如同黎明的泡沫一样渐渐消失。", "from": "幽兰黛尔" }
])

async function addOne() {
	// 连续解构 + 重命名
	let { data:res } = await axios.get('https://international.v1.hitokoto.cn/')
	
	let obj = { "id": res.id, "hitokoto": res.hitokoto, "from": res.from} 
	words.unshift(obj);
}

</script>

<style scoped>
.love-words {
	width: 800px;
	height: 300px;
	background-color: #EAD9CA;
	margin-top: 30px;
	border-radius: 10px;
	box-shadow: 1px 1px 20px;
}
button,ul{
	margin: 20px 0 10px 20px;
}
ul{
	padding-left: 20px;
}
li{
	margin-top: 10px;
}
li::marker{
	width: 5px;
	color: blueviolet;
}

</style>