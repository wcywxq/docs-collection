<!--
 * @Author: your name
 * @Date: 2020-11-21 17:33:14
 * @LastEditTime: 2020-11-21 17:33:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/views/Home.vue
-->
<template>
  <el-row>
    <el-col :span="18">
      <article-list v-for="(item, index) in totalCount" :key="index" :item="item" />
    </el-col>
    <el-col :span="6" class="pl-4">
      <widget-notice />
      <widget-statistics />
      <widget-tag-cloud />
    </el-col>
  </el-row>
</template>

<script>
import { reactive, toRefs } from "vue";
import ArticleList from "../components/ArticleList";
import WidgetNotice from "../components/Widget/WidgetNotice";
import WidgetStatistics from "../components/Widget/WidgetStatistics";
import WidgetTagCloud from "../components/Widget/WidgetTagCloud";

const totalCount = [
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript", "Java", "C", "C++", "Python", "Golang", "Rust", "Ruby", "Object-C", "Swift", "C#", "Kotlin"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  },
  {
    title: "SpringBoot开启事务、手动事务",
    description:
      "准确来说，我不是职业前端，因为需要使用 Angular 框架完成项目，所以顺带了解到了 NG-ZORRO 这套前端框架。整个过程处于边学习边使用的状态，主要的方式也是偏向于完成设计内容而非了解其实现原理。",
    publishTime: "2020-11-21",
    createTime: "2020-11-20",
    wordCount: 1900,
    watchCount: 163,
    commentCount: 3,
    likedCount: 5,
    categories: ["前端", "后端"],
    tags: ["Angular", "JavaScript"]
  }
];

export default {
  components: { WidgetTagCloud, WidgetStatistics, WidgetNotice, ArticleList },
  setup() {
    const state = reactive({
      totalCount
    });

    return { ...toRefs(state) };
  }
};
</script>
