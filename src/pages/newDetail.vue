<template>
	<ul class="new-list">
		<li>编号：{{ query.id }}</li>
		<li>标题：{{ query.title }}</li>
		<li>内容：{{ query.content }}</li>
	</ul>
</template>

<script lang="ts" setup name= "newDetail">
import {toRefs} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let { query } = toRefs(route)


</script>

<style scoped>
	ul{
		padding: 10px 20px;
		margin: 0;
	}

	li{
		list-style: none;
		margin-bottom: 20px;
	}
	
</style> 