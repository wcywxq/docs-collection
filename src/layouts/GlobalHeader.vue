<!--
 * @Author: your name
 * @Date: 2020-11-21 16:59:19
 * @LastEditTime: 2020-11-21 17:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/layouts/GlobalHeader.vue
-->
<template>
  <div class="global-header">
    <el-row type="flex" align="middle">
      <el-col :span="6">
        lucifer 的网络博客
      </el-col>
      <el-col :span="12">
        Menu
      </el-col>
      <el-col :span="6">
        <el-input v-model="search" size="large" icon="el-icon-search" placeholder="搜索" clearable style="width: 100%;"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const search = ref("");

    return { search };
  }
};
</script>
