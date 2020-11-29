<template>
  <div class="notice">
    <Widget>
      <p>
        本站默认替换了右键菜单，唤醒原系统菜单：
        <kbd>Ctrl</kbd>
        +
        <kbd>右键</kbd>
        ~
      </p>
    </Widget>
  </div>
</template>

<script>
import Widget from "./index";
export default {
  name: "Notice",
  components: { Widget }
};
</script>

<style scoped></style>
