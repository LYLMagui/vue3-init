<template>
  <div class="app">
    <h2 class="title">Vue 路由测试</h2>
    <!-- 导航 -->
    <div class="navigate">
      <!-- 路由跳转 -->
      <!-- 路由to的三种不同写法 -->
      <RouterLink replace :to="{ name:'littlePerson'}" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path:'person3'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script lang="ts" setup="App">


</script>

<style>
html,
body{
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
#app{
  height: 100%;
}
.app{
  width: 100%;
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
.title{
  width: 1140px;
  height: 50px;
  margin: 0 auto;
  background-color: #A3A3A3;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #636363;
}

.navigate{
  width: 1080px;
  height: 70px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}



.navigate a{
  line-height: 40px;
  height: 40px;
  display: inline-block;
  width: 60px;
  text-decoration-line: none;
  font-size: 20px;
  margin: 0 150px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #A3A3A3;
  color: white;
}

.navigate a.active {
  background-color: chocolate;
}



.main-content{
  display: flex;
  align-self: center;
  width: 1000px;
  border-radius: 6px;
  border: 1px solid black;
  height: 70%;
  box-sizing: border-box;
  align-items: stretch;
}

</style>
