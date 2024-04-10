// 1.引入路由
import { createRouter, createWebHistory } from "vue-router";
// 2.引入要可以呈现的组件


const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      name: "littlePerson",
      path: "/person",
      component: () => import("../pages/person.vue"),
    },
    {
      path: "/News",
      component: () => import("../pages/News.vue"),
      children: [
        {
          // /:xx 是参数占位
          name: "new-Detail",
          path: "newDetail/:id/:title/:content",
          component: () => import("../pages/newDetail.vue"),
          // props的第一种写法：将路由组件收到的所有params参数作为
          props: true,

          // 第二种写法：可以自己决定将什么作为props给路由组件
          // props(route) {
          //   return route.query;
          // }

          // 第三种写法：对象写法
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300
          // }
        },
      ],
    },
    {
      path: "/person3",
      component: () => import("../pages/person3.vue"),
    },
  ],
});

// 3.并暴露路由
export default router;
