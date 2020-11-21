<!--
 * @Author: your name
 * @Date: 2020-11-21 17:04:32
 * @LastEditTime: 2020-11-21 17:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/layouts/BasicLayout.vue
-->
<template>
  <div class="basic-layout">
    <el-container>
      <el-header>
        <global-header />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import GlobalHeader from "./GlobalHeader";

export default {
  components: { GlobalHeader }
};
</script>
