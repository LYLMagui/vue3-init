<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newList" :key="news.id">
        <!-- 路由传参 -->
        <!-- 第一种写法 -->
        <!-- <router-link :to="`/news/newDetail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</router-link> -->

        <!-- 第二种写法 -->
        <router-link :to="{
          path: '/news/newDetail',
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>


</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue';

const newList = reactive([
  { id: 1, title: '今年清明节居然放假这么多……', content: "今年清明节居然放假这么多天" },
  { id: 2, title: '中秋节的月亮……', content: "中秋节的月亮居然这么大" },
  { id: 3, title: '国庆节居然有这种活动……', content: "国庆节居然有这种活动，太令人惊讶了" },
]);
</script>
<style scoped>
.news {
  width: 100%;
  display: flex;
  margin: 15px 15px;
  box-sizing: border-box;
  align-items: stretch;
  padding: 20px;
}

ul {
  padding: 50px 10px 0 10px;
  margin: 0;
}

li {
  list-style: none;
  margin-bottom: 30px;
}

a {
  text-decoration-line: none;
  color: #8DB442;

}

.news-content {
  border: 1px solid black;
  flex-grow: 1;
  border-radius: 5px;

}
</style>