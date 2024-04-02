// 1.引入路由
import { createRouter, createWebHistory } from "vue-router";
// 2.引入要可以呈现的组件
import Person from "../components/person.vue";
import Person2 from "../components/person2.vue";
import Person3 from "../components/person3.vue";

const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      path: "/person",
      component: Person,
    },
    {
      path: "/person2",
      component: Person2,
    },
    {
      path: "/person3",
      component: Person3,
    },
  ],
});

// 3.并暴露路由
export default router;
