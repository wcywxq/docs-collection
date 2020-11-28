<!--
 * @Author: your name
 * @Date: 2020-11-21 17:33:14
 * @LastEditTime: 2020-11-21 17:33:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/views/Home.vue
-->
<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <article-list v-for="item in totalCount" :key="item" :item="item" />
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        right
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, toRefs } from "vue";
import ArticleList from "../components/ArticleList";

const totalCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default {
  components: { ArticleList },
  setup() {
    const state = reactive({
      totalCount
    });

    return { ...toRefs(state) };
  }
};
</script>
