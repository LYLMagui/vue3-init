// 1.引入路由
import { createRouter, createWebHistory } from "vue-router";
// 2.引入要可以呈现的组件
import Person from "../pages/person.vue";
import News from "../pages/News.vue";
import Person3 from "../pages/person3.vue";
import newDetail from "../pages/newDetail.vue";

const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      name: "littlePerson",
      path: "/person",
      component: Person,
    },
    {
      path: "/News",
      component: News,
      children: [
        {
          path: "newDetail",
          component: newDetail
        }
      ]
    },
    {
      path: "/person3",
      component: Person3,
    },
  ],
});

// 3.并暴露路由
export default router;
