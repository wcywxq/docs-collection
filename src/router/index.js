/*
 * @Author: your name
 * @Date: 2020-11-21 12:51:39
 * @LastEditTime: 2020-11-21 17:35:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/router/index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/PageView"),
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import("../views/home")
      },
      {
        path: "/category",
        name: "分类",
        component: () => import("../views/category")
      },
      {
        path: "/tag",
        name: "标签",
        component: () => import("../views/tag")
      },
      {
        path: "/timeline",
        name: "归档",
        component: () => import("../views/timeline")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
