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
    component: () => import("../layouts/PageView"),
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import("../views/home")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
