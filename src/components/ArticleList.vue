<template>
  <div class="article-list">
    <el-card shadow="hover">
      {{ item }}
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    item: Number
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  margin-bottom: 20px;
}
</style>
