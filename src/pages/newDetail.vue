<template>
	<ul class="new-list">
		<li>编号：{{ route.params.id }}</li>
		<li>标题：{{ route.params.title }}</li>
		<li>内容：{{ route.params.content }}</li>
	</ul>
</template>

<script lang="ts" setup name= "newDetail">
import { useRoute } from 'vue-router';

const route = useRoute();



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