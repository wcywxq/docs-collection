<!--
 * @Author: your name
 * @Date: 2020-11-22 23:11:56
 * @LastEditTime: 2020-11-23 00:04:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/components/Search.vue
-->
<template>
  <div class="search">
    <el-input v-model="search" size="large" prefix-icon="el-icon-search" placeholder="搜索" clearable style="width: 100%"></el-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const search = ref("");

    return {
      search
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-input {
  &:hover {
    input {
      border-color: #1bc3fb;
    }
    .el-input__icon {
      color: #1bc3fb;
      font-weight: bold;
    }
  }

  input {
    border-radius: 8px;
    color: #333;
    background: #f4f4f4;

    &:focus {
      border-color: #1bc3fb;
      background: rgba(27, 195, 251, 0.15);
      + .el-input__prefix {
        > .el-input__icon {
          color: #1bc3fb;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
