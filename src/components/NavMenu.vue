<!--
 * @Author: magic
 * @Date: 2020-11-23 23:09:03
 * @LastEditTime: 2020-11-23 23:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog-client/src/components/NavMenu.vue
-->
<template>
  <div class="nav-menu">
    <el-row type="flex">
      <el-col
        :class="{
          'nav-menu-item': true,
          'nav-menu-item__active': active === key
        }"
        v-for="{ icon, title, key } in menuOptions"
        :key="title"
        @click="onChange(key)"
      >
        <i :class="icon" style="margin-right: 10px"></i>
        <span>{{ title }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

const menuList = [
  { icon: "el-icon-s-home", title: "回到主页", key: 0 },
  { icon: "el-icon-folder-opened", title: "分类", key: 1 },
  { icon: "el-icon-collection-tag", title: "标签", key: 2 },
  { icon: "el-icon-time", title: "归档", key: 3 }
];

export default {
  setup() {
    const state = reactive({
      menuOptions: [],
      active: 0
    });

    state.menuOptions = menuList;

    const onChange = val => {
      state.active = val;
    };

    return { ...toRefs(state), onChange };
  }
};
</script>
<style lang="scss" scoped>
.nav-menu {
  &-item {
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &__active {
      position: relative;
      color: #1bc3fb;
      background-color: rgba(27, 195, 251, 0.1);
      transition: all 0.3s ease;
      &:after {
        content: "";
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        background-color: #1bc3fb;
        animation: showActiveLink 1s forwards;
      }
    }

    &:hover {
      color: #1bc3fb;
      background-color: rgba(27, 195, 251, 0.1);
    }
  }
}
@keyframes showActiveLink {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
