<!--
 * @Author: your name
 * @Date: 2020-11-21 17:04:32
 * @LastEditTime: 2020-11-23 23:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/layouts/BasicLayout.vue
-->
<template>
  <div class="basic-layout">
    <el-container>
      <el-header class="header-box">
        <global-header />
      </el-header>
      <el-main class="content-box">
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import GlobalHeader from "./GlobalHeader.vue";

export default {
  components: { GlobalHeader }
};
</script>
<style lang="scss" scoped>
.header-box {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  height: 64px;
  line-height: 64px;
  background-color: #ffffff;
}
.content-box {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
/deep/ .el-main {
  padding: 20px 0;
}
</style>
