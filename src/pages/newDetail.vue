<template>
	<ul class="new-list">
		<li>编号：{{ id }}</li>
		<li>标题：{{ title }}</li>
		<li>内容：{{ content }}</li>
	</ul>
</template>

<script lang="ts" setup name= "newDetail">
defineProps(['id', 'title', 'content'])


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