// 导入依赖，相当于导入Spring的包
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
import router from './router';
// 创建前端应用，传入根组件，并挂载到id为'app'的容器里，这个容器在index.html文件中
// 相当于SpringApplication.run(xxx.class)创建Spring容器
const app = createApp(App);

// 使用路由
app.use(router)
// 挂载应用
app.mount("#app");