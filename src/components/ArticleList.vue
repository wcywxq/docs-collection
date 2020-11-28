<template>
  <div class="article-list">
    <el-card shadow="hover">
      <h2>
        <a href="javascript:;">{{ item.title }}</a>
      </h2>
      <p>{{ item.description }}</p>
      <el-divider></el-divider>
      <!--      <el-row>-->
      <!--        -->
      <!--      </el-row>-->
      <!--      <i class="iconfont icontag"></i>-->
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

  .icontag {
    color: #52c41a;
  }
}
</style>
