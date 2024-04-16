<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>儿子的玩具：{{ toy }}</h4>
		<h4>父亲送的车：{{ car }}</h4>
		<button @click="sendToy(toy)">送给父亲一个玩具</button>
	</div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";

const toy = ref('奥特曼')
defineProps(["car","sendToy"])
</script>

<style scoped>
.child {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
