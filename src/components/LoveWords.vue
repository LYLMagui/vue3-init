<template>
	<div class="love-words">
		<button @click="addOne">加一句</button>
		<ul>
			<li v-for="word in loveWordsStore.words" :key="word.id">{{ word.hitokoto }} -- {{ word.from }}</li>
		</ul>
	</div>

</template>

<script lang="ts" setup name="LoveWords">

import {useLoveWordsStore} from '../store/loveWords'
import axios from 'axios'

const loveWordsStore = useLoveWordsStore();


async function addOne() {
	// 连续解构 + 重命名
	let { data:res } = await axios.get('https://international.v1.hitokoto.cn/')
	
	let obj = { "id": res.id, "hitokoto": res.hitokoto, "from": res.from} 
	loveWordsStore.words.unshift(obj)
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