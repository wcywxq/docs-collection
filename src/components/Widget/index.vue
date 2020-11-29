<template>
  <div class="widget-component">
    <header>
      <slot name="icon"></slot>
      <i v-if="icon" :class="['iconfont', icon]"></i>
      <span class="ml-2">{{ title }}</span>
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WidgetComponent",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    icon: {
      type: String,
      default: "iconwarning-circle"
    }
  }
};
</script>

<style lang="scss" scoped>
.widget-component {
  header {
    color: var(--color-primary);
  }

  .content {
    font-size: 12px;
  }
}
</style>
