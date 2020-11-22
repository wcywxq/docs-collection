<!--
 * @Author: your name
 * @Date: 2020-11-21 16:59:19
 * @LastEditTime: 2020-11-22 23:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/layouts/GlobalHeader.vue
-->
<template>
  <div class="global-header">
    <el-row type="flex" align="middle" justify="space-between">
      <el-col :span="6">
        lucifer 的网络博客
      </el-col>
      <el-col :span="12">
        Menu
      </el-col>
      <el-col :span="6">
        <search />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  components: { Search },
  setup() {}
};
</script>
