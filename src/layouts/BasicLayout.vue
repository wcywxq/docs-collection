<!--
 * @Author: your name
 * @Date: 2020-11-21 17:04:32
 * @LastEditTime: 2020-11-22 23:11:23
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
import GlobalHeader from "./GlobalHeader.vue";

export default {
  components: { GlobalHeader }
};
</script>

<style lang="scss">
.basic-layout {
  margin: 0 auto;
  max-width: 1080px;
}
</style>
