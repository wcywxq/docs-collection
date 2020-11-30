/*
 * @Author: your name
 * @Date: 2020-11-21 12:51:39
 * @LastEditTime: 2020-11-30 19:39:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/router/index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/",
    component: () => import("../layouts/PageView"),
    children: [
      {
        path: "/",
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
      },
      {
        path: "/article/:id",
        name: "文章内容",
        component: () => import("../views/article")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
