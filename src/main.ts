// 导入依赖，相当于导入Spring的包
import { createApp } from 'vue'
// 引入样式
import './style.css'
// 引入根组件
import App from './App.vue'
// 创建前端应用，传入根组件，并挂载到id为'app'的容器里，这个容器在index.html文件中
//相当于SpringApplication.run(xxx.class)创建Spring容器
createApp(App).mount('#app')
